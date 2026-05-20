import 'package:flutter/material.dart';

import '../data/mock_dashboard_data.dart';
import '../models/vm_models.dart';
import '../theme/ey_theme.dart';

List<ChartSlice> buildTierChartSlices(List<VmCandidate> candidates) {
  final counts = <String, int>{};
  for (final c in candidates) {
    counts[c.tier] = (counts[c.tier] ?? 0) + 1;
  }
  if (counts.isEmpty) return MockDashboardData.chartData;

  final colors = {
    'strong_match': EyColors.beamYellow,
    'good_match': EyColors.dark,
    'moderate_match': const Color(0xFFC4C4CD),
    'weak_match': const Color(0xFF747480),
    'not_a_fit': EyColors.red.withValues(alpha: 0.7),
  };

  final labels = {
    'strong_match': 'Strong match',
    'good_match': 'Good match',
    'moderate_match': 'Moderate',
    'weak_match': 'Weak',
    'not_a_fit': 'Not a fit',
  };

  return counts.entries
      .map(
        (e) => ChartSlice(
          label: labels[e.key] ?? e.key,
          value: e.value.toDouble(),
          color: colors[e.key] ?? EyColors.greyMid,
        ),
      )
      .toList()
    ..sort((a, b) => b.value.compareTo(a.value));
}
