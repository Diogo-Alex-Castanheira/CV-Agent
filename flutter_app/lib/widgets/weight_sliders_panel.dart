import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

class WeightSlidersPanel extends StatelessWidget {
  const WeightSlidersPanel({
    super.key,
    required this.dimensionKeys,
    required this.dimensionLabels,
    required this.weights,
    required this.onWeightChanged,
  });

  final List<String> dimensionKeys;
  final Map<String, String> dimensionLabels;
  final Map<String, double> weights;
  final void Function(String key, double value) onWeightChanged;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Magic Keys (pesos IA)',
              style: Theme.of(context).textTheme.titleSmall?.copyWith(
                    fontWeight: FontWeight.w700,
                  ),
            ),
            const SizedBox(height: 4),
            Text(
              'Ajusta os pesos — a lista reordena em tempo real.',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: EyColors.greyMid,
                  ),
            ),
            const SizedBox(height: 12),
            for (final key in dimensionKeys) ...[
              Row(
                children: [
                  Expanded(
                    flex: 3,
                    child: Text(
                      dimensionLabels[key] ?? key,
                      style: Theme.of(context).textTheme.bodySmall,
                    ),
                  ),
                  SizedBox(
                    width: 36,
                    child: Text(
                      (weights[key] ?? 1).toStringAsFixed(1),
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
              Slider(
                value: weights[key] ?? 1.0,
                min: 0,
                max: 5,
                divisions: 50,
                label: (weights[key] ?? 1).toStringAsFixed(1),
                onChanged: (v) => onWeightChanged(key, v),
              ),
              const SizedBox(height: 4),
            ],
          ],
        ),
      ),
    );
  }
}
