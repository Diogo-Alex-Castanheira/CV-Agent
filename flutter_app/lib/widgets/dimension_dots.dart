import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

Color scoreColor(double score) {
  if (score >= 80) return EyColors.green;
  if (score >= 65) return EyColors.amber;
  return EyColors.red;
}

class DimensionDotsRow extends StatelessWidget {
  const DimensionDotsRow({
    super.key,
    required this.dimensionKeys,
    required this.dimensionLabels,
    required this.scores,
  });

  final List<String> dimensionKeys;
  final Map<String, String> dimensionLabels;
  final Map<String, double> scores;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 4,
      children: [
        for (final key in dimensionKeys)
          Tooltip(
            message:
                '${dimensionLabels[key] ?? key}: ${scores[key]?.round() ?? 0}',
            child: Container(
              width: 12,
              height: 12,
              decoration: BoxDecoration(
                color: scoreColor(scores[key] ?? 0),
                shape: BoxShape.circle,
                border: Border.all(color: EyColors.greyLight, width: 1),
              ),
            ),
          ),
      ],
    );
  }
}
