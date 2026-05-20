import '../models/vm_models.dart';

/// Sliders 0–100 (default 50) → peso (default 1.0).
Map<String, double> weightsFromMagicKeys(List<double> sliderValues) {
  final map = <String, double>{};
  for (var i = 0; i < VmDimensionKeys.keys.length; i++) {
    final slider = i < sliderValues.length ? sliderValues[i] : 50.0;
    map[VmDimensionKeys.keys[i]] = slider / 50.0;
  }
  return map;
}

/// Média ponderada na escala 1–5 (scores da VM).
double computeWeightedScore(
  Map<String, double> dimensionScores,
  Map<String, double> weights,
) {
  var sum = 0.0;
  var weightSum = 0.0;
  for (final key in VmDimensionKeys.keys) {
    final w = weights[key] ?? 1.0;
    final score = dimensionScores[key] ?? 0.0;
    sum += score * w;
    weightSum += w;
  }
  if (weightSum == 0) return 0;
  return sum / weightSum;
}

List<RankedVmCandidate> rankVmCandidates(
  List<VmCandidate> candidates,
  List<double> magicKeySliders,
) {
  final weights = weightsFromMagicKeys(magicKeySliders);
  final ranked = candidates
      .map(
        (c) => RankedVmCandidate(
          candidate: c,
          weightedScore: computeWeightedScore(c.scores, weights),
        ),
      )
      .toList();
  ranked.sort((a, b) => b.weightedScore.compareTo(a.weightedScore));
  return ranked;
}

String formatAverageWeighted(List<RankedVmCandidate> ranked) {
  if (ranked.isEmpty) return '0.0';
  final avg =
      ranked.map((r) => r.weightedScore).reduce((a, b) => a + b) / ranked.length;
  return avg.toStringAsFixed(1);
}

String formatScoreOnFive(double score) => score.toStringAsFixed(1);

String formatScoreAsPercent(double scoreOnFive) =>
    '${((scoreOnFive / 5.0) * 100).round()}%';
