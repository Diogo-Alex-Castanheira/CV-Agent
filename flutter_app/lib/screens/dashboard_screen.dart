import 'package:flutter/material.dart';

import '../data/mock_dashboard_data.dart';
import '../models/vm_models.dart';
import '../theme/ey_theme.dart';
import '../utils/score_calculator.dart';
import '../utils/tier_chart.dart';
import '../widgets/candidate_detail_sheet.dart';
import '../widgets/candidate_list_widget.dart';
import '../widgets/kpi_card_widget.dart';
import '../widgets/main_top_bar_widget.dart';
import '../widgets/market_donut_chart_widget.dart';
import '../widgets/sidebar_widget.dart';

class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key, required this.jobs});

  final List<VmJob> jobs;

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  int _activeMenu = 0;
  late int _selectedJobIndex;
  final List<double> _magicKeys = List<double>.filled(6, 50);
  final Set<String> _revealedIds = {};

  @override
  void initState() {
    super.initState();
    _selectedJobIndex = 0;
  }

  VmJob get _job => widget.jobs[_selectedJobIndex];

  List<RankedVmCandidate> get _ranked =>
      rankVmCandidates(_job.candidates, _magicKeys);

  void _onMagicKeyChanged(int index, double value) {
    setState(() => _magicKeys[index] = value);
  }

  @override
  Widget build(BuildContext context) {
    final useDrawer = MediaQuery.sizeOf(context).width < 1100;
    final ranked = _ranked;

    final body = _MainContent(
      jobs: widget.jobs,
      selectedJobIndex: _selectedJobIndex,
      onJobChanged: (i) => setState(() => _selectedJobIndex = i),
      rankedCandidates: ranked,
      averageWeighted: formatAverageWeighted(ranked),
      totalCandidates: _job.candidates.length,
      strongCount: _job.candidates.where((c) => c.tier == 'strong_match').length,
      tierChartSlices: buildTierChartSlices(_job.candidates),
      revealedIds: _revealedIds,
      onBlindReview: _onBlindReview,
      onReveal: _onReveal,
      onCandidateTap: _onCandidateTap,
    );

    if (useDrawer) {
      return Scaffold(
        backgroundColor: EyColors.background,
        drawer: Drawer(
          child: SidebarWidget(
            activeMenuIndex: _activeMenu,
            onMenuTap: (i) {
              setState(() => _activeMenu = i);
              Navigator.pop(context);
            },
            magicKeyWeights: _magicKeys,
            onMagicKeyChanged: _onMagicKeyChanged,
          ),
        ),
        appBar: AppBar(
          backgroundColor: EyColors.dark,
          foregroundColor: EyColors.white,
          title: const Text('EY Talent Nexus'),
        ),
        body: body,
      );
    }

    return Scaffold(
      backgroundColor: EyColors.background,
      body: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SizedBox(
            width: 280,
            child: SidebarWidget(
              activeMenuIndex: _activeMenu,
              onMenuTap: (i) => setState(() => _activeMenu = i),
              magicKeyWeights: _magicKeys,
              onMagicKeyChanged: _onMagicKeyChanged,
            ),
          ),
          Expanded(child: body),
        ],
      ),
    );
  }

  void _onBlindReview(RankedVmCandidate row) {
    showCandidateDetailSheet(
      context,
      candidate: row.candidate,
      weightedScore: row.weightedScore,
      identityRevealed: false,
    );
  }

  void _onReveal(RankedVmCandidate row) {
    setState(() {
      final id = row.candidate.candidateId;
      if (_revealedIds.contains(id)) {
        _revealedIds.remove(id);
      } else {
        _revealedIds.add(id);
      }
    });
  }

  void _onCandidateTap(RankedVmCandidate row) {
    showCandidateDetailSheet(
      context,
      candidate: row.candidate,
      weightedScore: row.weightedScore,
      identityRevealed: _revealedIds.contains(row.candidate.candidateId),
    );
  }
}

class _MainContent extends StatelessWidget {
  const _MainContent({
    required this.jobs,
    required this.selectedJobIndex,
    required this.onJobChanged,
    required this.rankedCandidates,
    required this.averageWeighted,
    required this.totalCandidates,
    required this.strongCount,
    required this.tierChartSlices,
    required this.revealedIds,
    required this.onBlindReview,
    required this.onReveal,
    required this.onCandidateTap,
  });

  final List<VmJob> jobs;
  final int selectedJobIndex;
  final ValueChanged<int> onJobChanged;
  final List<RankedVmCandidate> rankedCandidates;
  final String averageWeighted;
  final int totalCandidates;
  final int strongCount;
  final List<ChartSlice> tierChartSlices;
  final Set<String> revealedIds;
  final void Function(RankedVmCandidate) onBlindReview;
  final void Function(RankedVmCandidate) onReveal;
  final void Function(RankedVmCandidate) onCandidateTap;

  @override
  Widget build(BuildContext context) {
    final job = jobs[selectedJobIndex];
    final contentWidth = MediaQuery.sizeOf(context).width;
    final stackPanels = contentWidth < 960;

    return ColoredBox(
      color: EyColors.background,
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(32),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const MainTopBarWidget(),
            const SizedBox(height: 24),
            _JobSelector(
              jobs: jobs,
              selectedIndex: selectedJobIndex,
              onChanged: onJobChanged,
            ),
            const SizedBox(height: 20),
            Text(
              'Bem-vindo de volta, ${MockDashboardData.recruiterName.split(' ').first}! 👋',
              style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    fontWeight: FontWeight.w700,
                    color: EyColors.dark,
                  ),
            ),
            const SizedBox(height: 6),
            Text(
              job.title,
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    color: EyColors.greyMid,
                    fontWeight: FontWeight.w500,
                  ),
            ),
            const SizedBox(height: 4),
            Text(
              job.subtitle,
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: EyColors.greyMid,
                  ),
            ),
            if (job.metadata != null &&
                job.metadata!.aboutRole.isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(
                job.metadata!.aboutRole,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: Theme.of(context).textTheme.bodySmall?.copyWith(
                      color: EyColors.dark,
                    ),
              ),
            ],
            const SizedBox(height: 6),
            Text(
              'Ajusta as Magic Keys — scores na escala 1–5 da VM.',
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: EyColors.greyMid,
                  ),
            ),
            const SizedBox(height: 28),
            _KpiRow(
              stackVertically: contentWidth < 720,
              totalCandidates: '$totalCandidates',
              averageWeighted: '$averageWeighted/5',
              strongCount: '$strongCount',
            ),
            const SizedBox(height: 28),
            if (stackPanels) ...[
              CandidateListWidget(
                rankedCandidates: rankedCandidates,
                revealedIds: revealedIds,
                onBlindReview: onBlindReview,
                onReveal: onReveal,
                onTap: onCandidateTap,
              ),
              const SizedBox(height: 24),
              const PlanAlertCardWidget(),
              const SizedBox(height: 16),
              MarketDonutChartWidget(slices: tierChartSlices),
            ] else
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    flex: 7,
                    child: CandidateListWidget(
                      rankedCandidates: rankedCandidates,
                      revealedIds: revealedIds,
                      onBlindReview: onBlindReview,
                      onReveal: onReveal,
                      onTap: onCandidateTap,
                    ),
                  ),
                  const SizedBox(width: 24),
                  Expanded(
                    flex: 3,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const PlanAlertCardWidget(),
                        const SizedBox(height: 16),
                        MarketDonutChartWidget(slices: tierChartSlices),
                      ],
                    ),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}

class _JobSelector extends StatelessWidget {
  const _JobSelector({
    required this.jobs,
    required this.selectedIndex,
    required this.onChanged,
  });

  final List<VmJob> jobs;
  final int selectedIndex;
  final ValueChanged<int> onChanged;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        child: Row(
          children: [
            const Icon(Icons.work_outline, color: EyColors.greyMid),
            const SizedBox(width: 12),
            Text(
              'Vaga:',
              style: Theme.of(context).textTheme.titleSmall?.copyWith(
                    fontWeight: FontWeight.w600,
                  ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: DropdownButtonHideUnderline(
                child: DropdownButton<int>(
                  value: selectedIndex,
                  isExpanded: true,
                  items: [
                    for (var i = 0; i < jobs.length; i++)
                      DropdownMenuItem(
                        value: i,
                        child: Text(
                          '${jobs[i].title} (${jobs[i].candidates.length} candidatos)',
                        ),
                      ),
                  ],
                  onChanged: (v) {
                    if (v != null) onChanged(v);
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _KpiRow extends StatelessWidget {
  const _KpiRow({
    required this.stackVertically,
    required this.totalCandidates,
    required this.averageWeighted,
    required this.strongCount,
  });

  final bool stackVertically;
  final String totalCandidates;
  final String averageWeighted;
  final String strongCount;

  @override
  Widget build(BuildContext context) {
    final items = [
      (Icons.people_outline, 'Candidatos analisados', totalCandidates, 'Nesta vaga'),
      (Icons.tune, 'Score médio ponderado', averageWeighted, 'Atualiza com sliders'),
      (Icons.verified_outlined, 'Strong match', strongCount, 'Tier pipeline'),
    ];

    if (stackVertically) {
      return Column(
        children: [
          for (var i = 0; i < items.length; i++) ...[
            if (i > 0) const SizedBox(height: 12),
            KpiCardWidget(
              icon: items[i].$1,
              title: items[i].$2,
              value: items[i].$3,
              subtitle: items[i].$4,
            ),
          ],
        ],
      );
    }

    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        for (var i = 0; i < items.length; i++) ...[
          if (i > 0) const SizedBox(width: 16),
          Expanded(
            child: KpiCardWidget(
              icon: items[i].$1,
              title: items[i].$2,
              value: items[i].$3,
              subtitle: items[i].$4,
            ),
          ),
        ],
      ],
    );
  }
}
