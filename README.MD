# InspireDev 

Projeto Full Stack desenvolvido para atividade prática da faculdade.

---

# Objetivo

O objetivo deste projeto é desenvolver uma aplicação Full Stack simples utilizando tecnologias modernas de Front-end e Back-end, permitindo compreender na prática a comunicação entre cliente e servidor.

O sistema foi desenvolvido de forma separada, utilizando branches diferentes no Git, simulando um ambiente real de trabalho em equipe.

---

# Tecnologias utilizadas

## Front-end
- HTML5
- CSS3
- JavaScript

## Back-end
- Node.js
- Express
- Cors

## Versionamento
- Git
- GitHub

---

#  Estrutura do Projeto

```text
inspiredev/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
└── README.md
```

---

# Branches utilizadas

## main
Branch principal do projeto.

## dev
Branch utilizada para integração e desenvolvimento.

## frontend
Branch utilizada para desenvolvimento da interface gráfica.

## backend
Branch utilizada para desenvolvimento do servidor e API.

---

# Fluxo Git utilizado

O projeto foi desenvolvido utilizando fluxo de versionamento com Git e GitHub.

Etapas realizadas:

1. Criação das branches
2. Desenvolvimento separado do Front-end
3. Desenvolvimento separado do Back-end
4. Commits individuais
5. Merge das branches na dev
6. Merge final da dev na main

---

# Front-end

O Front-end foi desenvolvido utilizando HTML, CSS e JavaScript.

Funcionalidades:
- Interface visual
- Comunicação com API
- Exibição de mensagens do servidor

---

# Back-end

O Back-end foi desenvolvido utilizando Node.js e Express.

Funcionalidades:
- Criação de servidor local
- Criação de API REST
- Liberação de comunicação utilizando Cors

---

# Como executar o projeto

## Front-end

Abrir o arquivo:

```text
frontend/index.html
```

no navegador

ou utilizar a extensão Live Server no VS Code.

---

## Back-end

Abrir o terminal na pasta backend e executar:

```bash
node server.js
```

Depois acessar no navegador:

```text
http://localhost:3000/mensagem
```

---

#  Exemplo de resposta da API

```json
{
  "mensagem": "Servidor InspireDev funcionando 🚀"
}
```

---

# Conceitos aprendidos

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de desenvolvimento Full Stack:

- Estruturação de projetos
- Comunicação entre Front-end e Back-end
- APIs REST
- Rotas no Express
- Uso de JSON
- Node.js
- Git
- GitHub
- Branches
- Merge
- Fluxo de versionamento

---

# Desenvolvido por

CamilLa

Projeto desenvolvido para fins acadêmicos.