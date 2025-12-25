@echo off
setlocal

REM --- Set working directory to this script's folder ---
cd /d "%~dp0" || goto :cd_error

REM --- Ensure Electron runs in GUI mode, not as Node ---
set ELECTRON_RUN_AS_NODE=

echo [kresz] Updating repository (git pull)...
where git >nul 2>&1
if errorlevel 1 (
    echo [kresz] git not found. Please install Git: https://git-scm.com/downloads
    goto :end
)

git pull
if errorlevel 1 (
    echo.
    echo [kresz] git pull failed. Stopping.
    goto :end
)

echo.
echo [kresz] Deleting node_modules...
if exist "node_modules" (
    rmdir /s /q "node_modules"
    echo [kresz] node_modules deleted.
) else (
    echo [kresz] node_modules not found, skipping.
)

echo.
echo [kresz] Running npm install...
call npm install
if errorlevel 1 (
    echo.
    echo [kresz] npm install failed. Stopping.
    goto :end
)

echo.
echo [kresz] Running npm rebuild...
call npm rebuild
if errorlevel 1 (
    echo.
    echo [kresz] npm rebuild failed. Stopping.
    goto :end
)

echo.
echo [kresz] Starting app (npm run start)...
call npm run start

goto :end

:cd_error
echo Failed to change directory to the script folder.

:end
endlocal
