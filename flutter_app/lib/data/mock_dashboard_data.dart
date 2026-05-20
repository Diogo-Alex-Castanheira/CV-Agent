import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

/// Dados estáticos de UI (não vêm da VM).
class MockDashboardData {
  MockDashboardData._();

  static const recruiterName = 'Guilherme Leal';
  static const recruiterRole = 'Talent Lead · EY';

  static final List<ChartSlice> chartData = [
    ChartSlice(label: 'Strong match', value: 38, color: EyColors.beamYellow),
    ChartSlice(label: 'Good / Moderate', value: 32, color: EyColors.dark),
    ChartSlice(label: 'Weak', value: 18, color: const Color(0xFFC4C4CD)),
    ChartSlice(label: 'Not a fit', value: 12, color: const Color(0xFF747480)),
  ];

  static const menuItems = [
    'Dashboard',
    'Candidaturas',
    'Vagas Abertas',
    'Relatórios',
    'Definições',
  ];
}

class ChartSlice {
  const ChartSlice({
    required this.label,
    required this.value,
    required this.color,
  });

  final String label;
  final double value;
  final Color color;
}
