// Arquivo: src/backend/models/Recurso.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa a conexão com o DB

// Define o modelo da tabela 'Recurso' no banco de dados
const Recurso = sequelize.define('Recurso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Título do material de estudo (Ex: Resumo de Química Orgânica)',
    },
    link_acesso: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isUrl: true, // Garante que é uma URL válida
        }
    },
    tipo_recurso: {
        type: DataTypes.ENUM('PDF', 'Video', 'Artigo', 'Edital'),
        allowNull: false,
        comment: 'Tipo de formato do material para fins de filtro.',
    },
    // Chave estrangeira que liga o recurso à Trilha de Conhecimento (RF002)
    trilha_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Trilhas', // Nome da tabela de Trilhas
            key: 'id',
        }
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'ID do usuário (estudante) que salvou ou publicou o recurso.'
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Recursos',
    timestamps: true, // Adiciona createdAt e updatedAt
});

// Define as relações (associações) com outros modelos (Trilha e Usuário)
Recurso.associate = (models) => {
    Recurso.belongsTo(models.Trilha, { foreignKey: 'trilha_id' });
    Recurso.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
};

module.exports = Recurso;