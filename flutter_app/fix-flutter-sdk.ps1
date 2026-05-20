# Repara cache Dart/Flutter + PATH
$FlutterBat = "C:\src\flutter\bin\flutter.bat"

if (-not (Test-Path $FlutterBat)) {
    Write-Host "ERRO: $FlutterBat nao existe." -ForegroundColor Red
    exit 1
}

. (Join-Path $PSScriptRoot "scripts\init-flutter-path.ps1")
Initialize-FlutterDevPath -FlutterBin "C:\src\flutter\bin"

Write-Host "=== Flutter ===" -ForegroundColor Cyan
& $FlutterBat --version

Write-Host "`n=== Upgrade + precache ===" -ForegroundColor Cyan
& $FlutterBat upgrade
& $FlutterBat precache --web
& $FlutterBat doctor

Set-Location $PSScriptRoot

Write-Host "`n=== Limpar projeto ===" -ForegroundColor Cyan
if (Test-Path ".dart_tool") { Remove-Item -Recurse -Force ".dart_tool" -ErrorAction SilentlyContinue }
if (Test-Path "build") { Remove-Item -Recurse -Force "build" -ErrorAction SilentlyContinue }
& $FlutterBat clean
& $FlutterBat pub get

Write-Host "`nOK. Corre: .\run-chrome.ps1" -ForegroundColor Green
