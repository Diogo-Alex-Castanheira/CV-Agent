import 'package:flutter/material.dart';

import 'screens/dashboard_screen.dart';
import 'services/vm_data_repository.dart';
import 'theme/ey_theme.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const TalentNexusApp());
}

class TalentNexusApp extends StatelessWidget {
  const TalentNexusApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EY Talent Nexus',
      debugShowCheckedModeBanner: false,
      theme: buildEyTheme(),
      home: const _BootstrapScreen(),
    );
  }
}

class _BootstrapScreen extends StatefulWidget {
  const _BootstrapScreen();

  @override
  State<_BootstrapScreen> createState() => _BootstrapScreenState();
}

class _BootstrapScreenState extends State<_BootstrapScreen> {
  final _repo = VmDataRepository();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: _repo.loadJobs(),
      builder: (context, snapshot) {
        if (snapshot.connectionState != ConnectionState.done) {
          return const Scaffold(
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  CircularProgressIndicator(),
                  SizedBox(height: 16),
                  Text('A carregar output da VM...'),
                ],
              ),
            ),
          );
        }
        if (snapshot.hasError) {
          return Scaffold(
            body: Center(
              child: Padding(
                padding: const EdgeInsets.all(24),
                child: Text('Erro ao carregar JSON:\n${snapshot.error}'),
              ),
            ),
          );
        }
        final jobs = snapshot.data!;
        if (jobs.isEmpty) {
          return const Scaffold(
            body: Center(child: Text('Nenhuma vaga no bundle JSON.')),
          );
        }
        return DashboardScreen(jobs: jobs);
      },
    );
  }
}
