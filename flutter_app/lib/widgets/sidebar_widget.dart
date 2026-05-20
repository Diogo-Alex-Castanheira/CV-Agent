import 'package:flutter/material.dart';

import '../data/mock_dashboard_data.dart';
import '../models/vm_models.dart';
import '../theme/ey_theme.dart';

class SidebarWidget extends StatelessWidget {
  const SidebarWidget({
    super.key,
    required this.activeMenuIndex,
    required this.onMenuTap,
    required this.magicKeyWeights,
    required this.onMagicKeyChanged,
  });

  final int activeMenuIndex;
  final ValueChanged<int> onMenuTap;
  final List<double> magicKeyWeights;
  final void Function(int index, double value) onMagicKeyChanged;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: EyColors.dark,
      child: SizedBox(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const SizedBox(height: 28),
            const _EyLogoHeader(),
            const SizedBox(height: 28),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                children: [
                  for (var i = 0; i < MockDashboardData.menuItems.length; i++)
                    _SidebarMenuButton(
                      label: MockDashboardData.menuItems[i],
                      isActive: i == activeMenuIndex,
                      onTap: () => onMenuTap(i),
                    ),
                  const SizedBox(height: 28),
                  Text(
                    'Magic Keys',
                    style: Theme.of(context).textTheme.labelSmall?.copyWith(
                          color: EyColors.sidebarTextMuted,
                          letterSpacing: 1.2,
                          fontWeight: FontWeight.w600,
                        ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Pesos por dimensão (1–5)',
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                          color: EyColors.white,
                          fontWeight: FontWeight.w600,
                        ),
                  ),
                  const SizedBox(height: 16),
                  for (var i = 0; i < VmDimensionKeys.keys.length; i++) ...[
                    _MagicKeySlider(
                      label: VmDimensionKeys.labels[VmDimensionKeys.keys[i]]!,
                      value: i < magicKeyWeights.length ? magicKeyWeights[i] : 50,
                      onChanged: (v) => onMagicKeyChanged(i, v),
                    ),
                    const SizedBox(height: 6),
                  ],
                ],
              ),
            ),
            const _RecruiterFooter(),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}

class _EyLogoHeader extends StatelessWidget {
  const _EyLogoHeader();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Row(
        children: [
          Image.asset(
            'assets/images/logo-EY-negro.png',
            height: 36,
            errorBuilder: (context, error, stackTrace) => const _EyLogoFallback(),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                RichText(
                  text: const TextSpan(
                    style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800),
                    children: [
                      TextSpan(text: 'EY ', style: TextStyle(color: EyColors.white)),
                      TextSpan(
                        text: 'Talent',
                        style: TextStyle(color: EyColors.beamYellow),
                      ),
                    ],
                  ),
                ),
                Text(
                  'Nexus',
                  style: Theme.of(context).textTheme.labelMedium?.copyWith(
                        color: EyColors.sidebarTextMuted,
                        letterSpacing: 2,
                      ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _EyLogoFallback extends StatelessWidget {
  const _EyLogoFallback();

  @override
  Widget build(BuildContext context) {
    return RichText(
      text: const TextSpan(
        style: TextStyle(fontSize: 28, fontWeight: FontWeight.w800),
        children: [
          TextSpan(text: 'EY', style: TextStyle(color: EyColors.white)),
          TextSpan(text: ' · ', style: TextStyle(color: EyColors.greyMid)),
          TextSpan(text: 'N', style: TextStyle(color: EyColors.beamYellow)),
        ],
      ),
    );
  }
}

class _SidebarMenuButton extends StatelessWidget {
  const _SidebarMenuButton({
    required this.label,
    required this.isActive,
    required this.onTap,
  });

  final String label;
  final bool isActive;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Material(
        color: isActive ? EyColors.beamYellow : Colors.transparent,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(10),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            child: Row(
              children: [
                Icon(
                  _iconFor(label),
                  size: 20,
                  color: isActive ? EyColors.dark : EyColors.sidebarTextMuted,
                ),
                const SizedBox(width: 12),
                Text(
                  label,
                  style: TextStyle(
                    fontWeight: isActive ? FontWeight.w600 : FontWeight.w500,
                    color: isActive ? EyColors.dark : EyColors.sidebarTextMuted,
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  IconData _iconFor(String label) {
    switch (label) {
      case 'Dashboard':
        return Icons.dashboard_outlined;
      case 'Candidaturas':
        return Icons.people_outline;
      case 'Vagas Abertas':
        return Icons.work_outline;
      case 'Relatórios':
        return Icons.bar_chart_outlined;
      default:
        return Icons.settings_outlined;
    }
  }
}

class _MagicKeySlider extends StatelessWidget {
  const _MagicKeySlider({
    required this.label,
    required this.value,
    required this.onChanged,
  });

  final String label;
  final double value;
  final ValueChanged<double> onChanged;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Expanded(
              child: Text(
                label,
                style: const TextStyle(color: EyColors.white, fontSize: 11),
              ),
            ),
            Text(
              value.round().toString(),
              style: const TextStyle(
                color: EyColors.beamYellow,
                fontWeight: FontWeight.w700,
                fontSize: 12,
              ),
            ),
          ],
        ),
        Slider(
          value: value,
          min: 0,
          max: 100,
          onChanged: onChanged,
        ),
      ],
    );
  }
}

class _RecruiterFooter extends StatelessWidget {
  const _RecruiterFooter();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 16),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF252536),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        children: [
          CircleAvatar(
            radius: 22,
            backgroundColor: EyColors.beamYellow,
            child: Text(
              MockDashboardData.recruiterName.substring(0, 1),
              style: const TextStyle(
                color: EyColors.dark,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  MockDashboardData.recruiterName,
                  style: const TextStyle(
                    color: EyColors.white,
                    fontWeight: FontWeight.w600,
                    fontSize: 13,
                  ),
                ),
                Text(
                  MockDashboardData.recruiterRole,
                  style: const TextStyle(
                    color: EyColors.sidebarTextMuted,
                    fontSize: 11,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
