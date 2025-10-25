@echo off
chcp 65001 >nul
cls
echo ╔══════════════════════════════════════════╗
echo ║  TESTE DO SERVIDOR - BACKEND             ║
echo ╚══════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [Passo 1] Verificando arquivo .env...
if exist ".env" (
    echo ✅ Arquivo .env existe
) else (
    echo ❌ Arquivo .env NÃO existe!
    echo.
    echo Criando arquivo .env...
    (
        echo APP_NAME=backend_licencas
        echo ENVIRONMENT=development
        echo PORT=3333
        echo DATABASE_URL=postgresql://postgres:secret@localhost:5433/eng_8?schema=public
    ) > .env
    echo ✅ Arquivo .env criado!
)

echo.
echo [Passo 2] Verificando Docker...
docker ps >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está rodando!
    echo    Por favor, abra o Docker Desktop
    pause
    exit /b 1
)
echo ✅ Docker está rodando

echo.
echo [Passo 3] Verificando PostgreSQL...
docker ps | findstr "postgres" | findstr "5433" >nul 2>&1
if errorlevel 1 (
    echo ⚠️  PostgreSQL não está na porta 5433
    echo    Iniciando PostgreSQL...
    docker-compose up -d
    timeout /t 7 /nobreak >nul
    echo ✅ PostgreSQL iniciado
) else (
    echo ✅ PostgreSQL está rodando na porta 5433
)

echo.
echo [Passo 4] Testando conexão com banco...
timeout /t 2 /nobreak >nul

echo.
echo [Passo 5] Compilando TypeScript para JavaScript...
call npm run build
if errorlevel 1 (
    echo.
    echo ❌ Erro ao compilar TypeScript!
    echo    Tentando método alternativo...
    echo.
    echo [Método Alternativo] Usando ts-node...
    npx -y ts-node src/main.ts
    if errorlevel 1 (
        echo.
        echo ❌ Também deu erro com ts-node
        echo.
        echo SOLUÇÃO: Execute manualmente no terminal do Cursor:
        echo 1. Pressione Ctrl + ^
        echo 2. Digite: cd backend
        echo 3. Digite: npm run build
        echo 4. Digite: npm start
        echo.
        pause
        exit /b 1
    )
) else (
    echo ✅ Compilação concluída!
    echo.
    echo [Passo 6] Iniciando servidor...
    echo.
    echo ╔══════════════════════════════════════════╗
    echo ║  SERVIDOR RODANDO!                       ║
    echo ║  Mantenha esta janela aberta             ║
    echo ║  Pressione Ctrl+C para parar             ║
    echo ╚══════════════════════════════════════════╝
    echo.
    npm start
)

pause

