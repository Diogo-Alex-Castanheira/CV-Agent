# Restaura PATH do sistema + prioriza C:\src\flutter (nao apaga System32/Git)
function Initialize-FlutterDevPath {
    param(
        [string]$FlutterBin = "C:\src\flutter\bin"
    )

    $machine = [Environment]::GetEnvironmentVariable("Path", "Machine")
    $user = [Environment]::GetEnvironmentVariable("Path", "User")
    $merged = @(
        if ($machine) { $machine -split ';' }
        if ($user) { $user -split ';' }
        if ($env:PATH) { $env:PATH -split ';' }
    ) | ForEach-Object { $_.Trim() } | Where-Object { $_ }

    $unique = [System.Collections.Generic.List[string]]::new()
    foreach ($p in $merged) {
        if ($p -match '(?i)SurFIX[\\/]develop[\\/]flutter') { continue }
        if (-not $unique.Contains($p)) { [void]$unique.Add($p) }
    }

    $withoutFlutter = $unique | Where-Object { $_ -ine $FlutterBin }
    $env:PATH = "$FlutterBin;" + ($withoutFlutter -join ';')

    $system32 = Join-Path $env:SystemRoot "System32"
    if ($env:PATH -notlike "*$system32*") {
        $env:PATH = "$system32;$env:PATH"
    }
}
