# EY Talent Nexus — arranque limpo no Chrome (SDK: C:\src\flutter)
$FlutterBat = "C:\src\flutter\bin\flutter.bat"

if (-not (Test-Path $FlutterBat)) {
    Write-Host "ERRO: Flutter nao encontrado em C:\src\flutter" -ForegroundColor Red
    exit 1
}

. (Join-Path $PSScriptRoot "scripts\init-flutter-path.ps1")
Initialize-FlutterDevPath -FlutterBin "C:\src\flutter\bin"

Set-Location $PSScriptRoot

Write-Host "Flutter:" -ForegroundColor Cyan
& $FlutterBat --version
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: flutter --version falhou. Verifica Git e PATH." -ForegroundColor Red
    exit 1
}
Write-Host ""

if (Test-Path ".dart_tool") {
    Remove-Item -Recurse -Force ".dart_tool" -ErrorAction SilentlyContinue
}
if (Test-Path "build") {
    Remove-Item -Recurse -Force "build" -ErrorAction SilentlyContinue
}
& $FlutterBat clean
& $FlutterBat pub get
& $FlutterBat precache --web

Write-Host "A iniciar Chrome..." -ForegroundColor Green
& $FlutterBat run -d chrome @args
