import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

class KpiCardWidget extends StatelessWidget {
  const KpiCardWidget({
    super.key,
    required this.icon,
    required this.title,
    required this.value,
    this.subtitle,
  });

  final IconData icon;
  final String title;
  final String value;
  final String? subtitle;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: EyColors.beamYellow.withValues(alpha: 0.25),
                borderRadius: BorderRadius.circular(12),
              ),
              child: Icon(icon, color: EyColors.dark, size: 26),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                          color: EyColors.greyMid,
                          fontWeight: FontWeight.w500,
                        ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    value,
                    style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                          fontWeight: FontWeight.w700,
                          color: EyColors.dark,
                        ),
                  ),
                  if (subtitle != null) ...[
                    const SizedBox(height: 2),
                    Text(
                      subtitle!,
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            color: EyColors.greyMid,
                          ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
