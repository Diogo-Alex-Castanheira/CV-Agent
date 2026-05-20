import 'package:flutter/material.dart';

import '../theme/ey_theme.dart';

class MainTopBarWidget extends StatelessWidget {
  const MainTopBarWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          flex: 3,
          child: TextField(
            decoration: InputDecoration(
              hintText: 'Pesquisar candidatos, skills ou vagas...',
              hintStyle: TextStyle(color: EyColors.greyMid.withValues(alpha: 0.8)),
              prefixIcon: const Icon(Icons.search, color: EyColors.greyMid),
            ),
          ),
        ),
        const SizedBox(width: 16),
        _iconButton(Icons.notifications_outlined),
        const SizedBox(width: 8),
        _iconButton(Icons.help_outline),
        const SizedBox(width: 8),
        CircleAvatar(
          radius: 20,
          backgroundColor: EyColors.dark,
          child: const Icon(Icons.person, color: EyColors.white, size: 22),
        ),
      ],
    );
  }

  Widget _iconButton(IconData icon) {
    return Material(
      color: EyColors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(12),
        side: const BorderSide(color: Color(0xFFE8EAED)),
      ),
      child: InkWell(
        onTap: () {},
        borderRadius: BorderRadius.circular(12),
        child: SizedBox(
          width: 44,
          height: 44,
          child: Icon(icon, color: EyColors.dark, size: 22),
        ),
      ),
    );
  }
}
