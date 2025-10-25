@echo off
echo ===============================================
echo   INICIANDO SERVIDOR BACKEND
echo ===============================================
echo.

cd /d "%~dp0"

echo [1/3] Verificando Docker...
docker ps >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Docker nao esta rodando!
    echo Por favor, inicie o Docker Desktop e tente novamente.
    pause
    exit /b 1
)

echo [OK] Docker rodando
echo.

echo [2/3] Verificando PostgreSQL...
docker ps | findstr "postgres" >nul 2>&1
if errorlevel 1 (
    echo Iniciando PostgreSQL...
    docker-compose up -d
    echo Aguardando PostgreSQL inicializar...
    timeout /t 5 /nobreak >nul
) else (
    echo [OK] PostgreSQL ja esta rodando
)

echo.
echo [3/3] Iniciando servidor Node.js...
echo.
echo ===============================================
echo   Servidor rodando na porta 3333
echo   Mantenha esta janela aberta!
echo   Pressione Ctrl+C para parar o servidor
echo ===============================================
echo.

npx tsx src/main.ts

