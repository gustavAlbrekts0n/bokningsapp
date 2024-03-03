@echo off
echo Building React App...

cd ./react-app
call npm run build

if errorlevel 1 (
  echo Build failed. Exiting script.
  exit /b 1
) else (
  echo Build successful.
)