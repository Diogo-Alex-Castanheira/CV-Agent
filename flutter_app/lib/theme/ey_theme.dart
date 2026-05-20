import 'package:flutter/material.dart';

/// Paleta EY Talent Nexus (SaaS dashboard).
abstract final class EyColors {
  static const beamYellow = Color(0xFFFFE600);
  static const dark = Color(0xFF1A1A2A);
  static const background = Color(0xFFF8F9FA);
  static const white = Color(0xFFFFFFFF);
  static const greyMid = Color(0xFF747480);
  static const greyLight = Color(0xFFC4C4CD);
  static const sidebarTextMuted = Color(0xFFB8B8C8);

  static const yellow = beamYellow;
  static const textDark = dark;
  static const green = Color(0xFF2E7D32);
  static const amber = Color(0xFFF9A825);
  static const red = Color(0xFFC62828);
}

ThemeData buildEyTheme() {
  return ThemeData(
    useMaterial3: true,
    fontFamily: 'Segoe UI',
    scaffoldBackgroundColor: EyColors.background,
    colorScheme: ColorScheme.fromSeed(
      seedColor: EyColors.beamYellow,
      primary: EyColors.beamYellow,
      onPrimary: EyColors.dark,
      surface: EyColors.white,
      onSurface: EyColors.dark,
    ),
    textTheme: const TextTheme(
      bodyLarge: TextStyle(color: EyColors.dark),
      bodyMedium: TextStyle(color: EyColors.dark),
      titleLarge: TextStyle(color: EyColors.dark, fontWeight: FontWeight.w600),
      headlineMedium: TextStyle(color: EyColors.dark, fontWeight: FontWeight.w700),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: EyColors.white,
      foregroundColor: EyColors.dark,
      elevation: 0,
    ),
    cardTheme: CardThemeData(
      color: EyColors.white,
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: Color(0xFFE8EAED)),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: EyColors.white,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: Color(0xFFE8EAED)),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: Color(0xFFE8EAED)),
      ),
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
    ),
    sliderTheme: const SliderThemeData(
      activeTrackColor: EyColors.beamYellow,
      inactiveTrackColor: Color(0xFF3D3D52),
      thumbColor: EyColors.beamYellow,
      overlayColor: Color(0x33FFE600),
    ),
  );
}
