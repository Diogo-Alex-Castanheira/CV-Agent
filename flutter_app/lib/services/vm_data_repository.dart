import 'dart:convert';

import 'package:flutter/services.dart';

import '../models/vm_models.dart';

/// Carrega output real da VM: `job_N_results.json` + `jobs_metadata.json`.
class VmDataRepository {
  VmDataRepository({
    this.pipelineAssetDir = 'assets/data/pipeline',
    this.metadataFile = 'jobs_metadata.json',
    this.jobResultFiles = const [
      'job_1_results.json',
      'job_2_results.json',
      'job_3_results.json',
      'job_4_results.json',
      'job_5_results.json',
    ],
  });

  final String pipelineAssetDir;
  final String metadataFile;
  final List<String> jobResultFiles;

  List<VmJob>? _cache;

  Future<List<VmJob>> loadJobs() async {
    if (_cache != null) return _cache!;

    final metadataByJobId = await _loadMetadataByJobId();
    final jobs = <VmJob>[];
    for (final file in jobResultFiles) {
      final path = '$pipelineAssetDir/$file';
      final raw = await rootBundle.loadString(path);
      final json = jsonDecode(raw) as Map<String, dynamic>;
      final jobId = json['job_id'] as String;
      jobs.add(VmJob.fromJson(json, metadata: metadataByJobId[jobId]));
    }

    jobs.sort((a, b) => a.jobId.compareTo(b.jobId));
    _cache = jobs;
    return _cache!;
  }

  void clearCache() => _cache = null;

  Future<Map<String, VmJobMetadata>> _loadMetadataByJobId() async {
    final path = '$pipelineAssetDir/$metadataFile';
    final raw = await rootBundle.loadString(path);
    final list = jsonDecode(raw) as List<dynamic>;
    return {
      for (final item in list)
        (item as Map<String, dynamic>)['job_id'] as String:
            VmJobMetadata.fromJson(item),
    };
  }
}
