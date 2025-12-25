@echo off
setlocal

set "REPO_URL=https://github.com/barneyson55/kresz.git"
set "TARGET_DIR=%~1"

if "%TARGET_DIR%"=="" set "TARGET_DIR=%CD%\kresz"

if exist "%TARGET_DIR%\" (
  echo [error] Target directory already exists: "%TARGET_DIR%"
  exit /b 1
)

where git >nul 2>&1
if errorlevel 1 (
  echo [setup] git not found. Installing Git via winget...
  where winget >nul 2>&1
  if errorlevel 1 (
    echo [error] winget not found. Please install Git manually: https://git-scm.com/downloads
    exit /b 1
  )

  winget install --id Git.Git -e --accept-source-agreements --accept-package-agreements
  if errorlevel 1 exit /b 1
)

echo [clone] Cloning %REPO_URL% to "%TARGET_DIR%"...
git clone "%REPO_URL%" "%TARGET_DIR%"
if errorlevel 1 exit /b 1

echo [ok] Clone complete.
echo [next] To run: "%TARGET_DIR%\run-kresz.bat"
