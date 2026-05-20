import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../models/vm_models.dart';
import '../theme/ey_theme.dart';
import '../utils/score_calculator.dart';
import 'radar_chart_widget.dart';
import 'tier_badge.dart';

void showCandidateDetailSheet(
  BuildContext context, {
  required VmCandidate candidate,
  required double weightedScore,
  required bool identityRevealed,
}) {
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: EyColors.white,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
    ),
    builder: (ctx) => DraggableScrollableSheet(
      expand: false,
      initialChildSize: 0.85,
      minChildSize: 0.5,
      maxChildSize: 0.95,
      builder: (_, controller) => SingleChildScrollView(
        controller: controller,
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(
                    identityRevealed ? candidate.name : candidate.blindLabel,
                    style: Theme.of(ctx).textTheme.titleLarge?.copyWith(
                          fontWeight: FontWeight.w700,
                        ),
                  ),
                ),
                TierBadge(tier: candidate.tier),
              ],
            ),
            const SizedBox(height: 8),
            Text(
              'Score ponderado: ${formatScoreOnFive(weightedScore)}/5 · IA: ${formatScoreOnFive(candidate.overallScore)}/5',
              style: Theme.of(ctx).textTheme.bodyMedium?.copyWith(
                    color: EyColors.greyMid,
                  ),
            ),
            const SizedBox(height: 20),
            Text('Resumo', style: Theme.of(ctx).textTheme.titleSmall),
            const SizedBox(height: 6),
            Text(candidate.summary),
            const SizedBox(height: 16),
            if (candidate.strengths.isNotEmpty) ...[
              Text('Pontos fortes', style: Theme.of(ctx).textTheme.titleSmall),
              const SizedBox(height: 6),
              for (final s in candidate.strengths) Text('• $s'),
              const SizedBox(height: 16),
            ],
            if (candidate.gaps.isNotEmpty) ...[
              Text('Lacunas', style: Theme.of(ctx).textTheme.titleSmall),
              const SizedBox(height: 6),
              for (final g in candidate.gaps) Text('• $g'),
              const SizedBox(height: 16),
            ],
            Text('Dimensões (1–5)', style: Theme.of(ctx).textTheme.titleSmall),
            const SizedBox(height: 8),
            _VmRadarChart(scores: candidate.scores),
            if (candidate.interviewQuestions.isNotEmpty) ...[
              const SizedBox(height: 16),
              Text('Perguntas de entrevista', style: Theme.of(ctx).textTheme.titleSmall),
              const SizedBox(height: 6),
              for (var i = 0; i < candidate.interviewQuestions.length; i++)
                Padding(
                  padding: const EdgeInsets.only(bottom: 6),
                  child: Text('${i + 1}. ${candidate.interviewQuestions[i]}'),
                ),
            ],
            const SizedBox(height: 16),
            FilledButton.icon(
              onPressed: () {
                Clipboard.setData(ClipboardData(text: candidate.feedbackDraft));
                ScaffoldMessenger.of(ctx).showSnackBar(
                  const SnackBar(content: Text('Feedback draft copiado.')),
                );
              },
              icon: const Icon(Icons.copy, size: 18),
              label: const Text('Copiar feedback draft'),
            ),
          ],
        ),
      ),
    ),
  );
}

class _VmRadarChart extends StatelessWidget {
  const _VmRadarChart({required this.scores});

  final Map<String, double> scores;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 220,
      child: VmDimensionRadarChart(
        dimensionKeys: VmDimensionKeys.keys,
        dimensionLabels: VmDimensionKeys.labels,
        scoresOnFive: scores,
      ),
    );
  }
}
