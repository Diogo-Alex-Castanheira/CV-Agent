// Modelos alinhados ao JSON da VM (pipeline).

class VmDimensionKeys {
  VmDimensionKeys._();

  static const keys = [
    'relevant_experience',
    'technical_skills',
    'education',
    'language_proficiency',
    'soft_skills_leadership',
    'culture_motivation_fit',
  ];

  static const labels = {
    'relevant_experience': 'Experiência Relevante',
    'technical_skills': 'Competências Técnicas',
    'education': 'Formação',
    'language_proficiency': 'Proficiência Linguística',
    'soft_skills_leadership': 'Soft Skills / Liderança',
    'culture_motivation_fit': 'Fit Cultural',
  };
}

class VmJobMetadata {
  VmJobMetadata({
    required this.department,
    required this.location,
    required this.experienceLevel,
    required this.aboutRole,
    required this.requiredSkills,
  });

  final String department;
  final String location;
  final String experienceLevel;
  final String aboutRole;
  final List<String> requiredSkills;

  factory VmJobMetadata.fromJson(Map<String, dynamic> json) => VmJobMetadata(
        department: json['department'] as String? ?? '',
        location: json['location'] as String? ?? '',
        experienceLevel: json['experience_level'] as String? ?? '',
        aboutRole: json['about_role'] as String? ?? '',
        requiredSkills:
            (json['required_skills'] as List<dynamic>?)?.cast<String>() ?? [],
      );
}

class VmJob {
  VmJob({
    required this.jobId,
    required this.title,
    required this.candidates,
    this.metadata,
  });

  final String jobId;
  final String title;
  final List<VmCandidate> candidates;
  final VmJobMetadata? metadata;

  factory VmJob.fromJson(
    Map<String, dynamic> json, {
    VmJobMetadata? metadata,
  }) {
    final jobMeta = json['job'] as Map<String, dynamic>?;
    return VmJob(
      jobId: json['job_id'] as String,
      title: json['title'] as String,
      metadata:
          metadata ?? (jobMeta != null ? VmJobMetadata.fromJson(jobMeta) : null),
      candidates: (json['candidates'] as List<dynamic>)
          .map((e) => VmCandidate.fromJson(e as Map<String, dynamic>))
          .toList(),
    );
  }

  String get subtitle {
    final m = metadata;
    if (m == null) return '$jobId · ${candidates.length} candidatos';
    final parts = <String>[
      if (m.department.isNotEmpty) m.department,
      if (m.location.isNotEmpty) m.location,
      '${candidates.length} candidatos',
    ];
    return parts.join(' · ');
  }
}

class VmCandidate {
  VmCandidate({
    required this.candidateId,
    required this.name,
    required this.tier,
    required this.scores,
    required this.summary,
    required this.strengths,
    required this.gaps,
    required this.interviewQuestions,
    required this.feedbackDraft,
    required this.overallScore,
  });

  final String candidateId;
  final String name;
  final String tier;
  final Map<String, double> scores;
  final String summary;
  final List<String> strengths;
  final List<String> gaps;
  final List<String> interviewQuestions;
  final String feedbackDraft;
  final double overallScore;

  factory VmCandidate.fromJson(Map<String, dynamic> json) {
    final scoresRaw = json['scores'] as Map<String, dynamic>;
    return VmCandidate(
      candidateId: json['candidate_id'] as String,
      name: json['name'] as String,
      tier: json['tier'] as String,
      scores: scoresRaw.map((k, v) => MapEntry(k, (v as num).toDouble())),
      summary: json['summary'] as String,
      strengths: (json['strengths'] as List<dynamic>).cast<String>(),
      gaps: (json['gaps'] as List<dynamic>).cast<String>(),
      interviewQuestions:
          (json['interview_questions'] as List<dynamic>).cast<String>(),
      feedbackDraft: json['feedback_draft'] as String,
      overallScore: (json['overall_score'] as num).toDouble(),
    );
  }

  String get blindLabel => candidateId;
}

class RankedVmCandidate {
  RankedVmCandidate({
    required this.candidate,
    required this.weightedScore,
  });

  final VmCandidate candidate;
  final double weightedScore;
}
