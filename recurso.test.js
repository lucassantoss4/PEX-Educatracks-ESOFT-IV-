// Arquivo: src/backend/tests/recurso.test.js

const Recurso = require('../models/Recurso'); 
const sequelize = require('../config/database'); 
const assert = require('assert');

// Configuração para rodar o teste em um ambiente isolado
beforeAll(async () => {
    // Sincroniza o modelo com o DB, criando a tabela se não existir
    await sequelize.sync({ force: true }); 
});

describe('Teste de Unidade do Modelo Recurso', () => {

    it('Deve criar um novo recurso válido no banco de dados', async () => {
        const novoRecurso = await Recurso.create({
            titulo: 'Guia Rápido de Inscrição no ENEM',
            link_acesso: 'https://exemplo.com/guia-enem',
            tipo_recurso: 'Artigo',
            trilha_id: 1, // Supondo que a Trilha 1 existe
            usuario_id: 101, // Supondo que o usuário 101 existe
        });

        // Assert (Verificação) - Teste de Integridade de Dados (RF001)
        assert.strictEqual(novoRecurso.titulo, 'Guia Rápido de Inscrição no ENEM', 
                           'O título do recurso não corresponde ao esperado.');
        
        assert.strictEqual(novoRecurso.tipo_recurso, 'Artigo', 
                           'O tipo de recurso não foi salvo corretamente.');

        // Teste de Existência (se o registro foi realmente criado)
        assert.ok(novoRecurso.id, 'O recurso não foi criado e não possui um ID.');
    });

    it('Deve falhar ao criar um recurso sem link_acesso (campo obrigatório)', async () => {
        try {
            await Recurso.create({
                titulo: 'Teste de Falha',
                tipo_recurso: 'PDF',
                trilha_id: 2,
                usuario_id: 102,
                // link_acesso está faltando (deve falhar)
            });
            // Se chegou aqui, o teste falhou, pois deveria ter lançado um erro
            assert.fail('Criou um recurso sem link_acesso, o que não deveria ser permitido.');
        } catch (error) {
            // Espera-se que lance um erro de validação do banco de dados
            assert.ok(error.name.includes('SequelizeValidationError') || error.message.includes('notNull'), 
                      'O erro lançado não é o esperado para campo obrigatório.');
        }
    });

});

afterAll(async () => {
    // Encerra a conexão com o banco de dados
    await sequelize.close();
});