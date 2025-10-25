@echo off
echo ===============================================
echo   PARANDO SERVIDOR
echo ===============================================
echo.

echo Parando processos Node.js...
taskkill /F /IM node.exe >nul 2>&1
if errorlevel 1 (
    echo Nenhum processo Node.js encontrado
) else (
    echo [OK] Processos Node.js finalizados
)

echo.
echo Deseja parar o Docker tambem? (S/N)
set /p resposta=
if /i "%resposta%"=="S" (
    echo Parando containers Docker...
    docker-compose down
    echo [OK] Containers parados
)

echo.
echo Concluido!
pause

