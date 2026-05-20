import 'package:flutter/material.dart';

import '../models/vm_models.dart';
import '../theme/ey_theme.dart';
import '../utils/score_calculator.dart';
import 'dimension_dots.dart';
import 'tier_badge.dart';

class CandidateListWidget extends StatelessWidget {
  const CandidateListWidget({
    super.key,
    required this.rankedCandidates,
    required this.revealedIds,
    this.onBlindReview,
    this.onReveal,
    this.onTap,
  });

  final List<RankedVmCandidate> rankedCandidates;
  final Set<String> revealedIds;
  final void Function(RankedVmCandidate row)? onBlindReview;
  final void Function(RankedVmCandidate row)? onReveal;
  final void Function(RankedVmCandidate row)? onTap;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 8),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Ranking (revisão cega)',
                  style: Theme.of(context).textTheme.titleMedium?.copyWith(
                        fontWeight: FontWeight.w700,
                      ),
                ),
                Text(
                  'Ordenado por score ponderado',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                        color: EyColors.greyMid,
                      ),
                ),
              ],
            ),
            const SizedBox(height: 8),
            ListView.separated(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemCount: rankedCandidates.length,
              separatorBuilder: (context, index) => const Divider(height: 1),
              itemBuilder: (context, index) {
                final row = rankedCandidates[index];
                return _CandidateRow(
                  rank: index + 1,
                  row: row,
                  showName: revealedIds.contains(row.candidate.candidateId),
                  onTap: () => onTap?.call(row),
                  onBlindReview: () => onBlindReview?.call(row),
                  onReveal: () => onReveal?.call(row),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _CandidateRow extends StatelessWidget {
  const _CandidateRow({
    required this.rank,
    required this.row,
    required this.showName,
    this.onTap,
    this.onBlindReview,
    this.onReveal,
  });

  final int rank;
  final RankedVmCandidate row;
  final bool showName;
  final VoidCallback? onTap;
  final VoidCallback? onBlindReview;
  final VoidCallback? onReveal;

  @override
  Widget build(BuildContext context) {
    final c = row.candidate;
    final displayId = showName ? c.name : c.blindLabel;

    final scoresPercent = c.scores.map(
      (k, v) => MapEntry(k, (v / 5.0) * 100.0),
    );

    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 12),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            CircleAvatar(
              radius: 24,
              backgroundColor: EyColors.background,
              child: Text(
                '$rank',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: EyColors.dark,
                ),
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          displayId,
                          style: Theme.of(context).textTheme.titleSmall?.copyWith(
                                fontWeight: FontWeight.w700,
                              ),
                        ),
                      ),
                      TierBadge(tier: c.tier),
                    ],
                  ),
                  const SizedBox(height: 8),
                  DimensionDotsRow(
                    dimensionKeys: VmDimensionKeys.keys,
                    dimensionLabels: VmDimensionKeys.labels,
                    scores: scoresPercent,
                  ),
                  if (c.gaps.isNotEmpty) ...[
                    const SizedBox(height: 6),
                    Text(
                      c.gaps.first,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: Theme.of(context).textTheme.bodySmall?.copyWith(
                            color: EyColors.red,
                          ),
                    ),
                  ],
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  formatScoreOnFive(row.weightedScore),
                  style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                        fontWeight: FontWeight.w800,
                        color: EyColors.dark,
                      ),
                ),
                const Text(
                  '/ 5 ponderado',
                  style: TextStyle(fontSize: 10, color: EyColors.greyMid),
                ),
                Text(
                  'IA ${formatScoreOnFive(c.overallScore)}',
                  style: const TextStyle(fontSize: 10, color: EyColors.greyMid),
                ),
                const SizedBox(height: 10),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    _SmallButton(
                      label: 'Revisão Cega',
                      filled: true,
                      onPressed: onBlindReview,
                    ),
                    const SizedBox(width: 6),
                    _SmallButton(
                      label: showName ? 'Ocultar' : 'Reveal',
                      filled: false,
                      onPressed: onReveal,
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _SmallButton extends StatelessWidget {
  const _SmallButton({
    required this.label,
    required this.filled,
    this.onPressed,
  });

  final String label;
  final bool filled;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    if (filled) {
      return SizedBox(
        height: 30,
        child: ElevatedButton(
          onPressed: onPressed,
          style: ElevatedButton.styleFrom(
            backgroundColor: EyColors.beamYellow,
            foregroundColor: EyColors.dark,
            elevation: 0,
            padding: const EdgeInsets.symmetric(horizontal: 10),
            textStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.w600),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
          ),
          child: Text(label),
        ),
      );
    }
    return SizedBox(
      height: 30,
      child: OutlinedButton(
        onPressed: onPressed,
        style: OutlinedButton.styleFrom(
          foregroundColor: EyColors.dark,
          side: const BorderSide(color: Color(0xFFE8EAED)),
          padding: const EdgeInsets.symmetric(horizontal: 8),
          textStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.w600),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
        ),
        child: Text(label),
      ),
    );
  }
}
