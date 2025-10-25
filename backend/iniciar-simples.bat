@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ════════════════════════════════════════
echo   INICIANDO SERVIDOR BACKEND
echo ════════════════════════════════════════
echo.

echo [1/4] Compilando código...
call npm run build
if errorlevel 1 (
    echo.
    echo ❌ ERRO ao compilar!
    echo Verifique os erros acima.
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Compilação OK!
echo.

echo [2/4] Verificando Docker...
docker ps >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está rodando!
    echo    Abra o Docker Desktop primeiro
    pause
    exit /b 1
)
echo ✅ Docker OK
echo.

echo [3/4] Verificando PostgreSQL...
docker ps | findstr "postgres" | findstr "5433" >nul
if errorlevel 1 (
    echo ⚠️  Iniciando PostgreSQL...
    docker-compose up -d
    timeout /t 5 /nobreak >nul
)
echo ✅ PostgreSQL OK
echo.

echo [4/4] Iniciando servidor...
echo.
echo ════════════════════════════════════════
echo   SERVIDOR RODANDO NA PORTA 3333
echo   NÃO FECHE ESTA JANELA!
echo   Pressione Ctrl+C para parar
echo ════════════════════════════════════════
echo.

npm start

pause

