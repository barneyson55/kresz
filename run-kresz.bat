@echo off
setlocal
cd /d "%~dp0"

rem Ensure Electron runs in GUI mode, not as Node.
set ELECTRON_RUN_AS_NODE=

set "NPM_EXE="
where npm >nul 2>&1 && set "NPM_EXE=npm"

if "%NPM_EXE%"=="" (
  echo [setup] npm not found. Installing Node.js LTS via winget...
  where winget >nul 2>&1
  if errorlevel 1 (
    echo [error] winget not found. Please install Node.js LTS manually from https://nodejs.org/
    goto :error
  )

  winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
  if errorlevel 1 goto :error

  if exist "C:\Program Files\nodejs\npm.cmd" set "NPM_EXE=C:\Program Files\nodejs\npm.cmd"
  if exist "C:\Program Files (x86)\nodejs\npm.cmd" set "NPM_EXE=C:\Program Files (x86)\nodejs\npm.cmd"
  if "%NPM_EXE%"=="" (
    where npm >nul 2>&1 && set "NPM_EXE=npm"
  )
)

if "%NPM_EXE%"=="" (
  echo [error] npm is still not available. Restart your terminal and try again.
  goto :error
)

echo [setup] Checking dependencies...
if not exist "node_modules" (
  echo [setup] Installing npm dependencies...
  call "%NPM_EXE%" install
  if errorlevel 1 goto :error
)

echo [setup] Rebuilding native modules...
call "%NPM_EXE%" rebuild
if errorlevel 1 goto :error

echo [run] Starting Electron app...
call "%NPM_EXE%" run start
if errorlevel 1 goto :error

goto :eof

:error
echo.
echo Failed with error %errorlevel%.
pause
exit /b %errorlevel%
