import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

class TierBadge extends StatelessWidget {
  const TierBadge({super.key, required this.tier});

  final String tier;

  @override
  Widget build(BuildContext context) {
    final (label, bg, fg) = _style(tier);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(6),
      ),
      child: Text(
        label,
        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: fg),
      ),
    );
  }

  (String, Color, Color) _style(String tier) {
    switch (tier) {
      case 'strong_match':
        return ('Strong match', EyColors.green.withValues(alpha: 0.15), EyColors.green);
      case 'good_match':
        return ('Good match', const Color(0xFFE8F5E9), EyColors.green);
      case 'moderate_match':
        return ('Moderate', EyColors.amber.withValues(alpha: 0.2), EyColors.amber);
      case 'weak_match':
        return ('Weak', const Color(0xFFFFF3E0), EyColors.amber);
      case 'not_a_fit':
        return ('Not a fit', EyColors.red.withValues(alpha: 0.12), EyColors.red);
      default:
        return (tier, EyColors.greyLight.withValues(alpha: 0.3), EyColors.greyMid);
    }
  }
}
