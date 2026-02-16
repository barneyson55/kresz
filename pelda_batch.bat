@echo off
setlocal

REM --- Set working directory to this script's folder ---
cd /d "%~dp0" || goto :cd_error

echo [kresz] Deleting node_modules...
if exist "node_modules" (
    rmdir /s /q "node_modules"
    echo [kresz] node_modules deleted.
) else (
    echo [kresz] node_modules not found, skipping.
)

echo.
echo [KRESZ] Running npm install...
call npm install
if errorlevel 1 (
    echo.
    echo [kresz] npm install failed. Stopping.
    goto :end
)

echo.
echo [kresz] Starting app (npm start)...
call npm start

goto :end

:cd_error
echo Failed to change directory to the script folder.

:end
endlocal
