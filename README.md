# 🎓 Sistema Escolar - Web Dev

Projeto de sistema escolar desenvolvido para a disciplina de Web Development.

## 📋 Entidades Implementadas

### ✅ Aluno (Completo)
- **Controller**: `backend/src/controllers/aluno.controller.ts`
- **Service**: `backend/src/services/aluno.service.ts`
- **Routes**: `backend/src/routes/aluno.route.ts`
- **Operações**: CREATE, READ, UPDATE, DELETE, LIST

### ✅ Unidade Escolar (Completo)
- **Controller**: `backend/src/controllers/unidade.controller.ts`
- **Service**: `backend/src/services/unidade.service.ts`
- **Routes**: `backend/src/routes/unidade.route.ts`
- **Operações**: CREATE, READ, UPDATE, DELETE, LIST

## 🚀 Como Iniciar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- Docker Desktop
- Cursor ou VS Code

### 📖 Guia Completo

Leia os arquivos:
- **Backend**: `backend/INICIAR-AQUI.md` - Guia detalhado do backend
- **Frontend**: `frontend/COMO-USAR-FRONTEND.md` - Guia do frontend

### ⚡ Início Rápido

#### **1. Iniciar Backend**

```bash
# Terminal 1 - Backend
cd backend
npx tsx src/main.ts
```

Aguarde ver: **"Server listening on http://localhost: 3333"**

#### **2. Iniciar Frontend**

```bash
# Terminal 2 - Frontend (novo terminal)
cd frontend
npm install  # apenas na primeira vez
npm run dev
```

Aguarde ver: **"Local: http://localhost:3000"**

#### **3. Acessar no Navegador**

Abra: **http://localhost:3000**

- Clique em **"Alunos"** no menu lateral
- Clique em **"Unidades Escolares"** no menu lateral

## 📡 Testando as APIs

### Usando Thunder Client (Recomendado)

1. **Instalar Thunder Client**:
   - No Cursor/VS Code, pressione `Ctrl+Shift+X`
   - Busque por "Thunder Client"
   - Clique em "Install"
   - Um ícone ⚡ aparecerá na barra lateral

2. **Fazer Requisições**:
   - Clique no ícone ⚡
   - Clique em "New Request"
   - Configure o método (GET, POST, PUT, DELETE)
   - Insira a URL
   - Para POST/PUT, vá em "Body" → "JSON" e cole o JSON
   - Clique em "Send"

### Endpoints Disponíveis

#### 🏥 Health Check
```
GET http://localhost:3333/health
```

#### 👨‍🎓 Alunos

**Listar todos**:
```
GET http://localhost:3333/api/alunos
```

**Buscar por ID**:
```
GET http://localhost:3333/api/alunos/:id
```

**Criar**:
```
POST http://localhost:3333/api/alunos
Content-Type: application/json

{
  "nome": "Maria Silva",
  "email": "maria.silva@email.com",
  "telefone": "(11) 98765-4321",
  "cpf": "123.456.789-00",
  "rg": "12.345.678-9",
  "data_nascimento": "2005-03-15"
}
```

**Atualizar**:
```
PUT http://localhost:3333/api/alunos/:id
Content-Type: application/json

{
  "nome": "Maria Silva Santos",
  "email": "maria.santos@email.com"
}
```

**Deletar**:
```
DELETE http://localhost:3333/api/alunos/:id
```

#### 🏫 Unidades Escolares

**Listar todas**:
```
GET http://localhost:3333/api/unidades
```

**Buscar por ID**:
```
GET http://localhost:3333/api/unidades/:id
```

**Criar**:
```
POST http://localhost:3333/api/unidades
Content-Type: application/json

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

**Atualizar**:
```
PUT http://localhost:3333/api/unidades/:id
Content-Type: application/json

{
  "nome": "Escola Estadual João da Silva",
  "codigo_inep": "87654321"
}
```

**Deletar**:
```
DELETE http://localhost:3333/api/unidades/:id
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **TypeScript**
- **Express** - Framework web
- **Prisma** - ORM
- **PostgreSQL** - Banco de dados
- **Docker** - Containerização

### Frontend
- **Next.js** - Framework React
- **TypeScript**
- **Tailwind CSS** - Estilização

## 📁 Estrutura do Projeto

```
web-dev/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Controladores (recebem requisições)
│   │   ├── services/       # Lógica de negócio
│   │   ├── routes/         # Definição das rotas
│   │   ├── prisma/         # Cliente Prisma
│   │   ├── app.ts          # Configuração do Express
│   │   └── main.ts         # Entrada da aplicação
│   ├── prisma/
│   │   └── schema.prisma   # Schema do banco de dados
│   ├── docker-compose.yml  # Configuração Docker
│   ├── iniciar-servidor.bat
│   ├── parar-servidor.bat
│   └── COMO_INICIAR.md     # Guia detalhado
├── frontend/
│   └── src/
│       ├── app/            # Páginas Next.js
│       ├── components/     # Componentes React
│       └── features/       # Features por módulo
└── README.md               # Este arquivo
```

## 🔧 Comandos Úteis

### Backend

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start

# Prisma
npm run prisma:generate  # Gerar cliente Prisma
npm run prisma:migrate   # Rodar migrations
npm run prisma:studio    # Abrir interface visual do banco
```

### Docker

```bash
# Iniciar containers
docker-compose up -d

# Parar containers
docker-compose down

# Ver logs
docker-compose logs -f

# Ver containers rodando
docker ps
```

## 📚 Padrão de Arquitetura

O projeto segue o padrão **Controller → Service → Repository** (Prisma):

1. **Routes** (`aluno.route.ts`): Define as rotas HTTP
2. **Controller** (`aluno.controller.ts`): Recebe requisições, valida dados, retorna respostas
3. **Service** (`aluno.service.ts`): Contém a lógica de negócio, faz operações no banco
4. **Prisma**: ORM que abstrai as queries SQL

## 🎯 Requisitos do Professor

✅ Escolher uma entidade dentro do domínio (Sistema Escolar)  
✅ Implementar Controller completo com CRUD  
✅ Implementar Service completo com operações de banco  
✅ Implementar Routes com todas as rotas REST  
✅ Testar com Thunder Client / Postman  

**Entidades implementadas**: Aluno e Unidade Escolar

## 🐛 Solução de Problemas

### Porta 3333 já em uso

```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3333).OwningProcess | Stop-Process -Force
```

### Docker não está rodando

1. Abra o Docker Desktop
2. Aguarde inicializar completamente
3. Tente novamente

### Erro ao conectar no banco

```bash
# Verificar se PostgreSQL está rodando
docker ps

# Se não estiver, iniciar
docker-compose up -d

# Aguardar 5 segundos
# Tentar conectar novamente
```

### Erro de TypeScript

```bash
# Verificar erros
npx tsc --noEmit

# Regenerar cliente Prisma
npm run prisma:generate
```

## 👥 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é acadêmico e está sob supervisão do professor.

## 📞 Contato

Para dúvidas sobre o projeto, consulte a documentação ou entre em contato com o professor.

---

**Desenvolvido com ❤️ para a disciplina de Web Development**

