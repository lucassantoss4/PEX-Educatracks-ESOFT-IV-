// Arquivo: src/backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Necessário para conectar Front-end e Back-end (diferentes portas)
const sequelize = require('./config/database'); // Sua configuração de conexão ao DB
const recursosRouter = require('./routes/recursos'); // Sua nova rota

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors()); 
app.use(bodyParser.json());

// Rotas da API
app.use('/api/recursos', recursosRouter); // Conecta a rota que criamos

// Teste de Conexão com o DB e Inicialização
async function startServer() {
    try {
        // Conecta ao DB e cria as tabelas se necessário
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        
        await sequelize.sync(); // Cria as tabelas (Recursos, Trilhas, etc.)

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
            console.log(`Pronto para ser consumido pelo Front-end (http://localhost:3000)`);
        });

    } catch (error) {
        console.error('Falha ao conectar ou iniciar o servidor:', error);
    }
}

startServer();