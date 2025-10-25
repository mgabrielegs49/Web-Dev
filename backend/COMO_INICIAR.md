# 🚀 Como Iniciar o Servidor - Guia Completo

## ✅ Passos que já foram feitos automaticamente:

1. ✅ Arquivo `.env` criado
2. ✅ Docker network `meta-network` criada
3. ✅ Docker volumes criados
4. ✅ PostgreSQL rodando no Docker
5. ✅ Migrations do Prisma aplicadas
6. ✅ Código corrigido (sem erros TypeScript)

## 🎯 Para iniciar o servidor:

### Opção 1: Abrir Terminal Integrado no Cursor

1. No Cursor, pressione `` Ctrl+` `` (Control + acento grave) para abrir o terminal integrado
2. Digite os seguintes comandos:

```bash
cd backend
npm run dev
```

3. Você verá uma mensagem: **"Server listening on http://localhost: 3333"**
4. Mantenha este terminal aberto enquanto estiver testando!

### Opção 2: Usar o Terminal do Windows

1. Abra o PowerShell ou CMD
2. Navegue até a pasta do projeto:

```bash
cd "C:\Users\Maria Gabriele\OneDrive\Documentos\web-dev\backend"
npm run dev
```

---

## 📡 Testando no Thunder Client

### Instalar Thunder Client

1. No Cursor, clique no ícone de **Extensões** (ou `Ctrl+Shift+X`)
2. Busque por **"Thunder Client"**
3. Clique em **Install**
4. Um ícone de ⚡ vai aparecer na barra lateral

### Testar as APIs

Após iniciar o servidor (`npm run dev`), siga estes passos:

#### 1. Testar Health Check

- Clique no ícone ⚡ do Thunder Client
- Clique em **"New Request"**
- **Método**: GET
- **URL**: `http://localhost:3333/health`
- Clique em **Send**
- Deve retornar: `{"ok":true,"uptime":...}`

#### 2. Listar Alunos

- Nova requisição
- **Método**: GET
- **URL**: `http://localhost:3333/api/alunos`
- Clique em **Send**

#### 3. Criar um Aluno

- Nova requisição
- **Método**: POST
- **URL**: `http://localhost:3333/api/alunos`
- Vá na aba **"Body"**
- Selecione **"JSON"**
- Cole este JSON:

```json
{
  "nome": "Maria Silva",
  "email": "maria.silva@email.com",
  "telefone": "(11) 98765-4321",
  "cpf": "123.456.789-00",
  "rg": "12.345.678-9",
  "data_nascimento": "2005-03-15"
}
```

- Clique em **Send**
- Copie o **"id"** que aparecer na resposta

#### 4. Buscar Aluno por ID

- Nova requisição
- **Método**: GET
- **URL**: `http://localhost:3333/api/alunos/{COLE_O_ID_AQUI}`
- Clique em **Send**

#### 5. Atualizar Aluno

- Nova requisição
- **Método**: PUT
- **URL**: `http://localhost:3333/api/alunos/{COLE_O_ID_AQUI}`
- **Body** (JSON):

```json
{
  "nome": "Maria Silva Santos",
  "email": "maria.santos@email.com",
  "telefone": "(11) 91234-5678"
}
```

- Clique em **Send**

#### 6. Deletar Aluno

- Nova requisição
- **Método**: DELETE
- **URL**: `http://localhost:3333/api/alunos/{COLE_O_ID_AQUI}`
- Clique em **Send**
- Deve retornar status **204** (sem conteúdo, sucesso)

---

## 🏫 Testando Unidade Escolar

As rotas seguem o mesmo padrão:

**Base**: `http://localhost:3333/api/unidades`

### Criar Unidade

- **Método**: POST
- **URL**: `http://localhost:3333/api/unidades`
- **Body**:

```json
{
  "nome": "Escola Municipal João da Silva",
  "codigo_inep": "12345678",
  "endereco": {
    "logradouro": "Rua das Flores",
    "numero": "123",
    "bairro": "Centro",
    "cep": "12345-678"
  }
}
```

### Listar Unidades

- **Método**: GET
- **URL**: `http://localhost:3333/api/unidades`

### Buscar, Atualizar e Deletar

Mesma lógica dos alunos, mas usando `/api/unidades`!

---

## 💡 Dicas

1. **Salvar Requisições**: Após criar, clique em "Save" para salvar a requisição
2. **Criar Coleções**: Organize em pastas (ex: "Alunos", "Unidades")
3. **Variáveis**: Configure `baseUrl` = `http://localhost:3333/api` e use `{{baseUrl}}/alunos`

---

## ❓ Problemas Comuns

### Servidor não inicia

```bash
# Verifique se o Docker está rodando:
docker ps

# Se o PostgreSQL não estiver rodando:
docker-compose up -d

# Aguarde alguns segundos e tente novamente:
npm run dev
```

### Erro de porta em uso

```bash
# Windows PowerShell - Para matar processos na porta 3333:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3333).OwningProcess | Stop-Process -Force
npm run dev
```

---

## 📚 Resumo das Rotas Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/health` | Status do servidor |
| GET | `/api/alunos` | Listar alunos |
| GET | `/api/alunos/:id` | Buscar aluno |
| POST | `/api/alunos` | Criar aluno |
| PUT | `/api/alunos/:id` | Atualizar aluno |
| DELETE | `/api/alunos/:id` | Deletar aluno |
| GET | `/api/unidades` | Listar unidades |
| GET | `/api/unidades/:id` | Buscar unidade |
| POST | `/api/unidades` | Criar unidade |
| PUT | `/api/unidades/:id` | Atualizar unidade |
| DELETE | `/api/unidades/:id` | Deletar unidade |

---

## 🎉 Pronto!

Agora é só iniciar o servidor e começar a testar!

