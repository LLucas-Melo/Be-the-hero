# Be The Hero 🦸‍♂️

## 💡 Sobre o Projeto
Be The Hero é uma aplicação que conecta pessoas interessadas em ajudar ONGs com causas financeiras. As ONGs podem cadastrar casos que necessitam de apoio financeiro, e usuários interessados podem visualizar estes casos e entrar em contato para ajudar.

## 🌟 Características
- Cadastro de ONGs
- Registro de casos/incidentes
- Lista de casos disponíveis para doação
- Sistema de contato via WhatsApp e E-mail
- Versão web e mobile
- API RESTful

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- SQLite
- Knex.js (Query Builder)
- Celebrate (Validação)
- Jest (Testes)

### Frontend Web
- React.js
- Axios
- React Router DOM
- React Icons

### Mobile
- React Native
- Expo
- React Navigation
- Axios

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js
- NPM ou Yarn
- Expo CLI (para mobile)

### Backend
```bash
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install

# Execute as migrations
npx knex migrate:latest

# Inicie o servidor
npm start
```

### Frontend Web
```bash
# Acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm start
```

### Mobile
```bash
# Acesse a pasta mobile
cd mobile

# Instale as dependências
npm install

# Inicie o app
expo start
```

## 📱 Funcionalidades

### Web
1. **Cadastro de ONG**
   - Nome
   - Email
   - WhatsApp
   - Cidade
   - UF

2. **Login/Logout**
   - Sistema de autenticação por ID

3. **Gerenciamento de Casos**
   - Cadastro de novos casos
   - Listagem de casos da ONG
   - Remoção de casos

### Mobile
1. **Visualização de Casos**
   - Lista de todos os casos
   - Detalhes do caso
   - Valor necessário

2. **Contato**
   - WhatsApp
   - E-mail

## 📁 Estrutura do Projeto
```
be-the-hero/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── routes.js
│   │   └── app.js
│   ├── tests/
│   └── knexfile.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── routes.js
│   └── public/
└── mobile/
    ├── src/
    │   ├── pages/
    │   ├── services/
    │   └── routes.js
    └── app.json
```

## 🔒 API Endpoints

### ONGs
- `POST /ongs` - Criar ONG
- `GET /ongs` - Listar ONGs
- `POST /sessions` - Login

### Casos
- `POST /incidents` - Criar caso
- `GET /incidents` - Listar casos
- `DELETE /incidents/:id` - Deletar caso
- `GET /profile` - Listar casos específicos da ONG

## 🧪 Testes
```bash
# Execute os testes
npm test
```

## 📱 Telas da Aplicação

### Web
1. **Login**
   - Acesso da ONG
   - Cadastro de nova ONG

2. **Dashboard**
   - Lista de casos da ONG
   - Botão para cadastrar novo caso
   - Botão para logout

3. **Cadastro de Caso**
   - Título do caso
   - Descrição
   - Valor necessário

### Mobile
1. **Lista de Casos**
   - Cards com resumo dos casos
   - Pull to refresh

2. **Detalhes do Caso**
   - Informações completas
   - Botões de contato

## 🔐 Segurança
- Validação de inputs
- Sanitização de dados
- Proteção contra SQL Injection
- Testes automatizados
- Validação de rotas

## 📈 Melhorias Futuras Sugeridas
- [ ] Autenticação JWT
- [ ] Upload de imagens
- [ ] Dashboard com estatísticas
- [ ] Sistema de notificações
- [ ] Perfil da ONG personalizado
- [ ] Sistema de doação integrado
- [ ] Histórico de doações

## 👥 Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🐛 Reportando Bugs
Abra uma issue descrevendo:
- Comportamento esperado
- Comportamento atual
- Passos para reproduzir o bug
- Screenshots (se aplicável)

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor
Lucas Melo
- GitHub: [@LLucas-Melo](https://github.com/LLucas-Melo)

## 🙏 Agradecimentos
- Rocketseat
- Comunidade Open Source
- Todos os contribuidores
