# Copia JSON da pipeline (repo/output) para assets do Flutter
$Root = Resolve-Path (Join-Path $PSScriptRoot "..\..\output")
$Dest = Join-Path $PSScriptRoot "..\assets\data\pipeline"
New-Item -ItemType Directory -Force -Path $Dest | Out-Null

Copy-Item (Join-Path $Root "job_*_results.json") $Dest -Force
Copy-Item (Join-Path $Root "jobs_metadata.json") $Dest -Force

Write-Host "OK — ficheiros em $Dest" -ForegroundColor Green
Get-ChildItem $Dest -Filter *.json | Select-Object Name, Length
