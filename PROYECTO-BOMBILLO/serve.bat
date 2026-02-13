@echo off
REM Abrir el demo en el navegador por defecto
pushd %~dp0
start "" "index.html"
popd
exit /b 0