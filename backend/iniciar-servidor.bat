@echo off
echo ===============================================
echo   INICIANDO SERVIDOR BACKEND
echo ===============================================
echo.
echo Verificando Docker...
docker ps >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Docker nao esta rodando!
    echo Por favor, inicie o Docker Desktop e tente novamente.
    pause
    exit /b 1
)

echo [OK] Docker esta rodando
echo.
echo Verificando PostgreSQL...
docker-compose ps | findstr "postgres" >nul 2>&1
if errorlevel 1 (
    echo Iniciando PostgreSQL...
    docker-compose up -d
    echo Aguardando PostgreSQL inicializar...
    timeout /t 5 /nobreak >nul
) else (
    echo [OK] PostgreSQL ja esta rodando
)

echo.
echo Iniciando servidor Node.js...
echo.
echo ===============================================
echo   Servidor iniciando na porta 3333
echo   Mantenha esta janela aberta!
echo   Pressione Ctrl+C para parar o servidor
echo ===============================================
echo.

npm run dev

