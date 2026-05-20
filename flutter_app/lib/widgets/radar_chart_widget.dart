import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

/// Radar para scores VM (escala 1–5).
class VmDimensionRadarChart extends StatelessWidget {
  const VmDimensionRadarChart({
    super.key,
    required this.dimensionKeys,
    required this.dimensionLabels,
    required this.scoresOnFive,
  });

  final List<String> dimensionKeys;
  final Map<String, String> dimensionLabels;
  final Map<String, double> scoresOnFive;

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1.2,
      child: RadarChart(
        RadarChartData(
          radarShape: RadarShape.polygon,
          tickCount: 4,
          ticksTextStyle: const TextStyle(fontSize: 9, color: EyColors.greyMid),
          getTitle: (index, angle) {
            final key = dimensionKeys[index % dimensionKeys.length];
            final label = dimensionLabels[key] ?? key;
            final short =
                label.length > 16 ? '${label.substring(0, 14)}…' : label;
            return RadarChartTitle(text: short, angle: angle);
          },
          radarBorderData: const BorderSide(color: EyColors.greyMid, width: 1),
          tickBorderData: const BorderSide(color: EyColors.greyLight),
          gridBorderData: const BorderSide(color: EyColors.greyLight),
          dataSets: [
            RadarDataSet(
              fillColor: EyColors.beamYellow.withValues(alpha: 0.35),
              borderColor: EyColors.dark,
              borderWidth: 2,
              entryRadius: 3,
              dataEntries: [
                for (final key in dimensionKeys)
                  RadarEntry(value: scoresOnFive[key] ?? 0),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
