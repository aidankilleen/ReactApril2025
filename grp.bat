@echo off
setlocal enabledelayedexpansion

:: Check for project name
if "%1"=="" (
    echo Please provide a project name.
    echo Usage: grp.bat my-app
    exit /b 1
)

set "PROJECT_NAME=%1"

:: Create the project using Vite and React template
echo Creating React app "%PROJECT_NAME%" using Vite...

:: Use npx instead of npm create to avoid breaking the batch flow
echo react | npm create vite@latest %PROJECT_NAME% -- --template react

if errorlevel 1 (
    echo Failed to create project.
    exit /b 1
)

:: Change to project directory
cd %PROJECT_NAME%

:: Optional: install and start project
echo Installing dependencies...
call npm install
call npm install prettier --save-dev
call code .

endlocal

