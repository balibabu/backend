@echo off

set /p PORT=Enter the port number: 

set NGROK_EXECUTABLE_PATH="D:\Others\ngrok\ngrok.exe"
set NGROK_DOMAIN=seriously-direct-unicorn.ngrok-free.app

start "" %NGROK_EXECUTABLE_PATH% http --domain=%NGROK_DOMAIN% %PORT%
