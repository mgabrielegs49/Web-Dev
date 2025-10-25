# 🎓 GUIA SUPER SIMPLES - Sistema Escolar

## 🚀 COMO VER FUNCIONANDO (3 passos)

### **PASSO 1: Iniciar o Backend**

**FORMA MAIS FÁCIL** (Windows):
1. Abra a pasta `backend` no Explorador de Arquivos
2. Dê **duplo-clique** no arquivo `iniciar.bat`
3. Uma janela vai abrir e iniciar o servidor automaticamente!

✅ **Aguarde** aparecer: `Server listening on http://localhost: 3333`

⚠️ **NÃO FECHE A JANELA!**

---

**OU pelo Terminal do Cursor**:
1. Pressione **Ctrl + `** (abre o terminal)
2. Digite:
```bash
cd backend
npx tsx src/main.ts
```

✅ **Aguarde** aparecer: `Server listening on http://localhost: 3333`

⚠️ **NÃO FECHE ESTE TERMINAL!**

---

### **PASSO 2: Iniciar o Frontend**

1. Abra um **NOVO terminal** clicando no **+** ao lado do terminal atual
2. Digite:
```bash
cd frontend
npm run dev
```

✅ **Aguarde** aparecer: `Local: http://localhost:3000`

⚠️ **NÃO FECHE ESTE TERMINAL TAMBÉM!**

---

### **PASSO 3: Abrir no Navegador**

1. Abra seu navegador (Chrome, Edge, etc)
2. Vá para: **http://localhost:3000**
3. Você vai ver um Dashboard bonito! 🎨
4. No menu lateral esquerdo, clique em:
   - **"Alunos"** → Ver lista de alunos
   - **"Unidades Escolares"** → Ver unidades

---

## 📝 COMO ADICIONAR DADOS DE TESTE

Para ver a lista funcionando, você precisa adicionar alguns dados!

### **Opção 1: Usar Thunder Client (Recomendado)**

1. No Cursor, pressione **Ctrl+Shift+X**
2. Busque "Thunder Client" e instale
3. Clique no ícone ⚡ que aparece na barra lateral
4. Clique em **"New Request"**

**Para criar um aluno**:
- Método: `POST`
- URL: `http://localhost:3333/api/alunos`
- Clique em **"Body"** → **"JSON"**
- Cole:
```json
{
  "nome": "Maria Silva",
  "email": "maria@escola.com",
  "telefone": "(11) 98765-4321",
  "cpf": "123.456.789-00",
  "data_nascimento": "2005-03-15"
}
```
- Clique em **"Send"**

**Para criar uma unidade**:
- Método: `POST`
- URL: `http://localhost:3333/api/unidades`
- Clique em **"Body"** → **"JSON"**
- Cole:
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
- Clique em **"Send"**

5. Depois, volte no navegador e **recarregue** (F5) para ver os dados aparecerem!

---

## 🎯 O QUE VOCÊ VAI VER

### **Página de Alunos** (`/dashboard/aluno`)
- Tabela bonita com todos os alunos
- Colunas: Nome, Email, Telefone, CPF, Data de Nascimento
- Botões para editar e excluir
- Botão "Novo Aluno"

### **Página de Unidades** (`/dashboard/unidade`)
- Cards visuais das escolas
- Mostra: Nome, Código INEP, Endereço completo
- Botões para editar e excluir
- Botão "Nova Unidade"

---

## ❗ SE DER ERRO

### **Erro no Backend**

Se aparecer erro ao iniciar o backend:

1. Certifique-se de que o Docker Desktop está aberto
2. No terminal do backend:
```bash
docker-compose up -d
```
3. Aguarde 5 segundos
4. Tente novamente:
```bash
npx tsx src/main.ts
```

### **Erro no Frontend**

Se aparecer erro ao iniciar o frontend:

```bash
cd frontend
npm install
npm run dev
```

### **Não aparece nada no navegador**

1. Verifique se os 2 terminais estão rodando (backend e frontend)
2. Verifique se está acessando **http://localhost:3000**
3. Pressione **F5** para recarregar a página
4. Abra o console do navegador (**F12**) e veja se tem erro

---

## 📚 ARQUIVOS IMPORTANTES

- **Backend**:
  - Controllers: `backend/src/controllers/`
  - Services: `backend/src/services/`
  - Routes: `backend/src/routes/`

- **Frontend**:
  - Páginas: `frontend/src/app/dashboard/`
  - Componentes: `frontend/src/features/`

---

## 🎬 ROTEIRO PARA APRESENTAR AO PROFESSOR

1. **Mostrar o código**:
   - `backend/src/controllers/aluno.controller.ts`
   - `backend/src/services/aluno.service.ts`
   - `backend/src/routes/aluno.route.ts`
   - Mesmos arquivos para `unidade`

2. **Mostrar funcionando**:
   - Abra Thunder Client
   - Faça requisições GET, POST, PUT, DELETE
   - Mostre as respostas JSON

3. **Mostrar o frontend**:
   - Abra http://localhost:3000
   - Navegue pelas páginas
   - Mostre a lista de alunos
   - Mostre os cards de unidades

4. **Explicar a arquitetura**:
   - "Criei o padrão MVC: Routes → Controller → Service"
   - "O Controller recebe a requisição e valida"
   - "O Service faz as operações no banco de dados"
   - "As Routes definem os endpoints REST"

---

## ✅ CHECKLIST FINAL

Antes de apresentar, verifique:

- [ ] Backend rodando (porta 3333)
- [ ] Frontend rodando (porta 3000)
- [ ] Pelo menos 2-3 alunos cadastrados
- [ ] Pelo menos 1-2 unidades cadastradas
- [ ] Thunder Client instalado
- [ ] Testou todas as operações (GET, POST, PUT, DELETE)

---

## 🎉 PRONTO!

Seu projeto está **COMPLETO** e funcionando!

**Backend**: ✅ Aluno + Unidade (CRUD completo)  
**Frontend**: ✅ Páginas bonitas e funcionais  
**Integração**: ✅ Frontend conectado com Backend  

**Você arrasou! 🚀**

---

## 💬 DÚVIDAS?

Leia os guias detalhados:
- `backend/INICIAR-AQUI.md`
- `frontend/COMO-USAR-FRONTEND.md`
- `README.md`

**Boa apresentação! 🎓✨**

