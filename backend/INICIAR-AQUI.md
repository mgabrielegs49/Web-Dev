# 🚀 COMO INICIAR O SERVIDOR - GUIA DEFINITIVO

## ✅ Forma Mais Simples (RECOMENDADO)

### **Passo 1: Abrir Terminal no Cursor**

1. No Cursor, pressione **Ctrl + `** (Control + acento grave)
2. Um terminal vai abrir na parte de baixo

### **Passo 2: Navegar para a pasta backend**

Digite no terminal:
```bash
cd backend
```

### **Passo 3: Iniciar o servidor**

Digite:
```bash
npx tsx src/main.ts
```

✅ Você verá: **"Server listening on http://localhost: 3333"**

✅ **PRONTO!** O servidor está rodando!

### **⚠️ IMPORTANTE**

- **NÃO FECHE o terminal** enquanto estiver testando!
- Para parar o servidor: pressione **Ctrl + C**

---

## 🖥️ TESTAR NO NAVEGADOR

Depois de iniciar o servidor, abra o navegador e acesse:

```
http://localhost:3333/health
```

Deve aparecer algo como:
```json
{"ok":true,"uptime":5.123}
```

---

## 📡 TESTAR NO THUNDER CLIENT

### **Instalar Thunder Client (apenas na 1ª vez)**

1. No Cursor, pressione **Ctrl+Shift+X**
2. Digite "Thunder Client"
3. Clique em "Install"
4. Um ícone ⚡ aparece na barra lateral

### **Fazer requisições**

1. Clique no ícone ⚡
2. Clique em "New Request"
3. **Health Check**:
   - Método: `GET`
   - URL: `http://localhost:3333/health`
   - Clique **Send**

4. **Listar Alunos**:
   - Método: `GET`
   - URL: `http://localhost:3333/api/alunos`
   - Clique **Send**

5. **Criar Aluno**:
   - Método: `POST`
   - URL: `http://localhost:3333/api/alunos`
   - Clique na aba **Body**
   - Selecione **JSON**
   - Cole:
   ```json
   {
     "nome": "Maria Silva",
     "email": "maria@email.com",
     "telefone": "(11) 98765-4321",
     "cpf": "123.456.789-00",
     "data_nascimento": "2005-03-15"
   }
   ```
   - Clique **Send**

---

## 📚 TODAS AS ROTAS DISPONÍVEIS

### **👨‍🎓 Alunos** (`/api/alunos`)

| Método | URL | Body (JSON) | Descrição |
|--------|-----|-------------|-----------|
| GET | `/api/alunos` | - | Lista todos |
| GET | `/api/alunos/:id` | - | Busca por ID |
| POST | `/api/alunos` | `{ "nome": "...", "email": "...", ... }` | Criar |
| PUT | `/api/alunos/:id` | `{ "nome": "...", ... }` | Atualizar |
| DELETE | `/api/alunos/:id` | - | Deletar |

**Exemplo de JSON para criar aluno**:
```json
{
  "nome": "João Santos",
  "email": "joao@email.com",
  "telefone": "(11) 91234-5678",
  "cpf": "987.654.321-00",
  "rg": "98.765.432-1",
  "data_nascimento": "2004-08-20"
}
```

### **🏫 Unidades Escolares** (`/api/unidades`)

| Método | URL | Body (JSON) | Descrição |
|--------|-----|-------------|-----------|
| GET | `/api/unidades` | - | Lista todas |
| GET | `/api/unidades/:id` | - | Busca por ID |
| POST | `/api/unidades` | `{ "nome": "...", ... }` | Criar |
| PUT | `/api/unidades/:id` | `{ "nome": "...", ... }` | Atualizar |
| DELETE | `/api/unidades/:id` | - | Deletar |

**Exemplo de JSON para criar unidade**:
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

---

## ❓ PROBLEMAS COMUNS

### **Erro: "Cannot find module"**

Instale as dependências:
```bash
npm install
```

### **Erro: "ECONNREFUSED" ou "Database connection failed"**

O PostgreSQL não está rodando. Inicie o Docker:
```bash
docker-compose up -d
```

Aguarde 5 segundos e tente novamente.

### **Erro: "Port 3333 is already in use"**

Algum processo está usando a porta. No PowerShell:
```bash
Get-Process -Id (Get-NetTCPConnection -LocalPort 3333).OwningProcess | Stop-Process -Force
```

---

## 🎯 RESUMO RÁPIDO

```bash
# 1. Abrir terminal (Ctrl + `)
# 2. Ir para backend
cd backend

# 3. Iniciar servidor
npx tsx src/main.ts

# 4. Abrir navegador
# http://localhost:3333/health

# 5. Testar no Thunder Client!
```

---

## ✅ PRONTO!

Seu projeto está **100% funcional** conforme pedido pelo professor:

- ✅ Aluno (Controller + Service + Routes + CRUD completo)
- ✅ Unidade Escolar (Controller + Service + Routes + CRUD completo)
- ✅ Banco de dados PostgreSQL configurado
- ✅ Pronto para demonstrar em aula!

**Dica**: Salve suas requisições no Thunder Client para não precisar recriar toda vez!

