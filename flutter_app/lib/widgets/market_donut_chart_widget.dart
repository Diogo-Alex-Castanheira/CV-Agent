import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../data/mock_dashboard_data.dart';
import '../theme/ey_theme.dart';

class MarketDonutChartWidget extends StatelessWidget {
  const MarketDonutChartWidget({super.key, required this.slices});

  final List<ChartSlice> slices;

  @override
  Widget build(BuildContext context) {
    final total = slices.fold<double>(0, (s, e) => s + e.value);

    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Visão de Mercado',
              style: Theme.of(context).textTheme.titleMedium?.copyWith(
                    fontWeight: FontWeight.w700,
                  ),
            ),
            const SizedBox(height: 4),
            Text(
              'Distribuição de matches por dimensão',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: EyColors.greyMid,
                  ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              height: 200,
              child: PieChart(
                PieChartData(
                  sectionsSpace: 2,
                  centerSpaceRadius: 40,
                  pieTouchData: PieTouchData(
                    touchCallback: (event, response) {},
                  ),
                  sections: [
                    for (final slice in slices)
                      PieChartSectionData(
                        value: slice.value,
                        color: slice.color,
                        radius: 52,
                        title: '${(slice.value / total * 100).round()}%',
                        titleStyle: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w700,
                          color: EyColors.white,
                        ),
                      ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 12,
              runSpacing: 8,
              children: [
                for (final slice in slices)
                  _LegendDot(label: slice.label, color: slice.color),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _LegendDot extends StatelessWidget {
  const _LegendDot({required this.label, required this.color});

  final String label;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 10,
          height: 10,
          decoration: BoxDecoration(color: color, shape: BoxShape.circle),
        ),
        const SizedBox(width: 6),
        Text(
          label,
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: EyColors.greyMid,
              ),
        ),
      ],
    );
  }
}

class PlanAlertCardWidget extends StatelessWidget {
  const PlanAlertCardWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: EyColors.beamYellow.withValues(alpha: 0.15),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: EyColors.beamYellow,
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Icon(Icons.calendar_month, color: EyColors.dark),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Plano de 90 Dias pronto',
                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                          fontWeight: FontWeight.w700,
                        ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '3 candidatos com onboarding gerado por IA.',
                    style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: EyColors.greyMid,
                        ),
                  ),
                ],
              ),
            ),
            IconButton(
              onPressed: () {},
              icon: const Icon(Icons.arrow_forward, size: 20),
            ),
          ],
        ),
      ),
    );
  }
}
