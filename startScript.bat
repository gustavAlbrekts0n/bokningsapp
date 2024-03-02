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

cd ..

echo Starting Node.js server...

cd ./node-runtime
call node server.js

if errorlevel 1 (
  echo Failed to start Node.js server. Exiting script.
  exit /b 1
) else (
  echo Node.js server started successfully.
)