# EY Talent Nexus — Flutter SaaS Dashboard

Dashboard Web/Desktop alinhado ao **JSON da VM** (pipeline). Pronto para trocar o bundle quando a máquina virtual entregar os ficheiros reais.

## Correr (recomendado)

```powershell
cd flutter_app
.\run-chrome.ps1
```

## Contrato VM

Ver [CONTRACT_VM.md](CONTRACT_VM.md).

- Fonte: `assets/data/pipeline/job_1_results.json` … `job_5_results.json`
- 6 dimensões em `scores` (escala **1–5**)
- `overall_score`, `tier`, `feedback_draft`, etc.

Sincronizar após alterar JSON na raiz: `.\scripts\sync_pipeline_assets.ps1`

## Funcionalidades

- Dropdown de **vaga** (`job_id`, `title`)
- Lista em **revisão cega** (`candidate_id`); **Reveal** mostra `name`
- **6 Magic Keys** → score ponderado (1–5) e reordenação em tempo real
- Detalhe: summary, strengths, gaps, radar, perguntas, copiar `feedback_draft`
- KPIs: candidatos na vaga, média ponderada, count `strong_match`

## Layout

- Sidebar 280px: menu + 6 sliders
- Main: KPIs + ranking + donut
- Responsivo: drawer < 1100px

## Troubleshooting SDK

Ver secções em commits anteriores: usa `.\fix-flutter-sdk.ps1` + `.\run-chrome.ps1` (PATH `C:\src\flutter`).
