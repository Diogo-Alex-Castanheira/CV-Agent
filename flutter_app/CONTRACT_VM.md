# Contrato JSON — output da VM / pipeline

Um ficheiro por vaga na VM: `job_N_results.json` (ex.: `job_1_results.json` na raiz do repo).

Objeto `job` (opcional) traz metadados da vaga (department, location, about_role, …).

## Job (raiz)

| Campo | Tipo |
|-------|------|
| `job_id` | string |
| `title` | string |
| `candidates` | Candidate[] |

## Candidate

| Campo | Tipo |
|-------|------|
| `candidate_id` | string (ID blind — exibir na UI) |
| `name` | string (só após Reveal) |
| `tier` | `strong_match` \| `good_match` \| `moderate_match` \| `weak_match` \| `not_a_fit` |
| `scores` | object (6 dimensões, escala **1–5**) |
| `summary` | string |
| `strengths` | string[] |
| `gaps` | string[] |
| `interview_questions` | string[] |
| `feedback_draft` | string |
| `overall_score` | number (média pipeline, escala ~1–5) |

## Dimensões (`scores`)

1. `relevant_experience`
2. `technical_skills`
3. `education`
4. `language_proficiency`
5. `soft_skills_leadership`
6. `culture_motivation_fit`

## Score ponderado (frontend)

```
weighted = Σ(scores[k] × weight_k) / Σ(weight_k)
```

Sliders Magic Keys (0–100, default 50 → peso 1.0) reordenam a lista em tempo real.

## Integração

Substituir `assets/data/jobs_bundle.json` ou apontar `VmDataRepository.assetPath` para a pasta da VM.
