import 'package:ey_talent_nexus/models/vm_models.dart';
import 'package:ey_talent_nexus/utils/score_calculator.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  final sample = VmCandidate(
    candidateId: 'cv_1',
    name: 'hidden',
    tier: 'strong_match',
    scores: {
      'relevant_experience': 5,
      'technical_skills': 4,
      'education': 3,
      'language_proficiency': 5,
      'soft_skills_leadership': 4,
      'culture_motivation_fit': 4,
    },
    summary: 's',
    strengths: [],
    gaps: [],
    interviewQuestions: [],
    feedbackDraft: 'f',
    overallScore: 4.2,
  );

  test('technical weight changes ranking order', () {
    final low = VmCandidate(
      candidateId: 'a',
      name: 'a',
      tier: 'moderate_match',
      scores: {
        'relevant_experience': 2,
        'technical_skills': 2,
        'education': 3,
        'language_proficiency': 3,
        'soft_skills_leadership': 3,
        'culture_motivation_fit': 3,
      },
      summary: '',
      strengths: [],
      gaps: [],
      interviewQuestions: [],
      feedbackDraft: '',
      overallScore: 2.5,
    );
    final highTech = VmCandidate(
      candidateId: 'b',
      name: 'b',
      tier: 'strong_match',
      scores: {
        'relevant_experience': 3,
        'technical_skills': 5,
        'education': 3,
        'language_proficiency': 3,
        'soft_skills_leadership': 3,
        'culture_motivation_fit': 3,
      },
      summary: '',
      strengths: [],
      gaps: [],
      interviewQuestions: [],
      feedbackDraft: '',
      overallScore: 3.3,
    );

    final balanced = rankVmCandidates([low, highTech], List.filled(6, 50));
    final techHeavy = rankVmCandidates(
      [low, highTech],
      [100, 10, 10, 10, 10, 10],
    );

    expect(balanced.first.candidate.candidateId, isNotEmpty);
    expect(techHeavy.first.candidate.candidateId, 'b');
  });

  test('weighted score uses 1-5 scale', () {
    final w = weightsFromMagicKeys(List.filled(6, 50));
    final score = computeWeightedScore(sample.scores, w);
    expect(score, greaterThan(0));
    expect(score, lessThanOrEqualTo(5));
  });
}
