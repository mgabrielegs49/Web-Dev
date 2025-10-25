# 🎨 Como Usar o Frontend - Sistema Escolar

## 🚀 Iniciando o Frontend

### **Pré-requisito**: Backend deve estar rodando!

Antes de iniciar o frontend, certifique-se de que o backend está rodando na porta 3333.

No terminal do backend:
```bash
cd backend
npx tsx src/main.ts
```

### **Iniciar o Frontend**

Abra um **NOVO terminal** (deixe o backend rodando no outro) e digite:

```bash
cd frontend
npm install  # apenas na primeira vez
npm run dev
```

✅ Você verá: **"Local: http://localhost:3000"**

✅ Abra o navegador em: **http://localhost:3000**

---

## 📱 Páginas Disponíveis

### **🏠 Dashboard** (`/`)
- Página inicial com estatísticas
- Visão geral do sistema

### **👨‍🎓 Alunos** (`/dashboard/aluno`)
- Lista todos os alunos cadastrados
- Visualiza informações: nome, email, telefone, CPF, data de nascimento
- Botões para editar e excluir
- Botão "Novo Aluno" para cadastrar

### **🏫 Unidades Escolares** (`/dashboard/unidade`)
- Lista todas as unidades escolares
- Visualiza: nome, código INEP, endereço completo
- Cards visuais com informações
- Botões para editar e excluir
- Botão "Nova Unidade" para cadastrar

---

## 🎯 Como Testar

### **1. Iniciar Backend e Frontend**

**Terminal 1 (Backend)**:
```bash
cd backend
npx tsx src/main.ts
```

**Terminal 2 (Frontend)**:
```bash
cd frontend
npm run dev
```

### **2. Criar Dados no Backend**

Use o Thunder Client ou navegador para criar alguns alunos e unidades:

**Criar Aluno** (Thunder Client):
```http
POST http://localhost:3333/api/alunos
Content-Type: application/json

{
  "nome": "Maria Silva",
  "email": "maria@escola.com",
  "telefone": "(11) 98765-4321",
  "cpf": "123.456.789-00",
  "data_nascimento": "2005-03-15"
}
```

**Criar Unidade** (Thunder Client):
```http
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

### **3. Visualizar no Frontend**

1. Abra **http://localhost:3000**
2. Clique em **"Alunos"** no menu lateral
3. Veja a lista de alunos cadastrados
4. Clique em **"Unidades Escolares"** 
5. Veja os cards das unidades

---

## 🎨 Funcionalidades Implementadas

### **Listagem de Alunos**
- ✅ Tabela responsiva com todos os dados
- ✅ Formatação automática de datas
- ✅ Botão "Novo Aluno"
- ✅ Botões de editar e excluir
- ✅ Mensagem quando não há alunos
- ✅ Loading state
- ✅ Error handling

### **Listagem de Unidades**
- ✅ Cards visuais bonitos
- ✅ Grid responsivo (3 colunas em telas grandes)
- ✅ Exibe código INEP e endereço completo
- ✅ Botão "Nova Unidade"
- ✅ Botões de editar e excluir
- ✅ Mensagem quando não há unidades
- ✅ Loading state
- ✅ Error handling

### **Sidebar (Menu Lateral)**
- ✅ Dashboard
- ✅ **Sistema Escolar**
  - Alunos
  - Unidades Escolares
- ✅ Outros Cadastros
  - Clientes
  - Produtos
  - Pedidos

---

## 🎥 Demonstração para o Professor

### **Roteiro de Apresentação**

1. **Mostrar o Backend Funcionando**
   ```bash
   # Terminal 1
   cd backend
   npx tsx src/main.ts
   ```
   → Servidor rodando na porta 3333

2. **Iniciar o Frontend**
   ```bash
   # Terminal 2
   cd frontend
   npm run dev
   ```
   → Frontend em http://localhost:3000

3. **Demonstrar no Thunder Client**
   - GET `/api/alunos` - Listar
   - POST `/api/alunos` - Criar
   - PUT `/api/alunos/:id` - Atualizar
   - DELETE `/api/alunos/:id` - Deletar
   - Repetir para `/api/unidades`

4. **Mostrar no Frontend**
   - Abrir http://localhost:3000
   - Navegar para "Alunos"
   - Mostrar lista de alunos
   - Navegar para "Unidades Escolares"
   - Mostrar cards das unidades
   - Demonstrar botões de editar/excluir

5. **Mostrar o Código**
   - `backend/src/controllers/aluno.controller.ts`
   - `backend/src/services/aluno.service.ts`
   - `backend/src/routes/aluno.route.ts`
   - Mesmos arquivos para `unidade`

---

## ❗ Problemas Comuns

### **Erro: "Erro ao carregar lista de alunos"**

**Solução**: Backend não está rodando.
```bash
cd backend
npx tsx src/main.ts
```

### **Erro: "Cannot GET /"**

**Solução**: Frontend não está rodando.
```bash
cd frontend
npm run dev
```

### **Erro: "CORS"**

**Solução**: Já está configurado no backend (`app.ts`), mas verifique se o backend está na porta 3333.

### **Página em branco**

1. Verifique o console do navegador (F12)
2. Verifique se o backend está rodando
3. Recarregue a página (F5)

---

## 📂 Estrutura do Frontend

```
frontend/
├── src/
│   ├── app/
│   │   └── dashboard/
│   │       ├── aluno/
│   │       │   └── page.tsx       ← Página de Alunos
│   │       ├── unidade/
│   │       │   └── page.tsx       ← Página de Unidades
│   │       └── page.tsx            ← Dashboard
│   ├── features/
│   │   ├── aluno/
│   │   │   └── aluno-listing.tsx  ← Componente de lista de alunos
│   │   └── unidade/
│   │       └── unidade-listing.tsx ← Componente de lista de unidades
│   └── components/
│       └── layout/
│           └── Sidebar.tsx         ← Menu lateral (atualizado)
```

---

## 🎉 Pronto!

Seu projeto está **completo**:

✅ **Backend**:
- Aluno (CRUD completo)
- Unidade Escolar (CRUD completo)
- API REST funcionando

✅ **Frontend**:
- Página de listagem de Alunos
- Página de listagem de Unidades
- Interface bonita e responsiva
- Integração com o backend

✅ **Pronto para apresentar ao professor!**

---

## 💡 Dicas Finais

1. **Sempre inicie o backend ANTES do frontend**
2. **Use dois terminais diferentes** (um para cada)
3. **Não feche os terminais** enquanto estiver testando
4. **Adicione dados de teste** antes de mostrar o frontend
5. **Teste tudo antes da apresentação**!

**Boa sorte na apresentação! 🚀**

