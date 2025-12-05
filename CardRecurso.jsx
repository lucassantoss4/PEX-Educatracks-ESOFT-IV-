// Arquivo: src/frontend/components/CardRecurso.jsx

import React from 'react';
import './CardRecurso.css'; // Importa estilos para mobile-first

// Componente que exibe um único recurso (material de estudo)
const CardRecurso = ({ recurso }) => {
    
    // Função para renderizar o ícone baseado no tipo de recurso
    const getIcon = (tipo) => {
        switch (tipo) {
            case 'PDF': return '📄';
            case 'Video': return '🎬';
            case 'Artigo': return '📰';
            case 'Edital': return '🔔'; 
            default: return '🔗';
        }
    };

    // Formata a data para melhor visualização do usuário
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    return (
        <div className="card-recurso">
            <div className="card-header">
                <span className="recurso-icon">{getIcon(recurso.tipo_recurso)}</span>
                <h3 className="recurso-title">{recurso.titulo}</h3>
            </div>
            
            <div className="card-body">
                <p className="recurso-metadata">
                    **Trilha:** {recurso.Trilha.nome}
                </p>
                <p className="recurso-metadata">
                    **Publicado em:** {formatDate(recurso.data_criacao)}
                </p>
            </div>

            <div className="card-actions">
                <a 
                    href={recurso.link_acesso} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn btn-${recurso.tipo_recurso.toLowerCase()}`}
                >
                    Acessar {recurso.tipo_recurso}
                </a>
            </div>
        </div>
    );
};

export default CardRecurso;

/*
// Exemplo de Estilo Simples (src/frontend/components/CardRecurso.css)
.card-recurso {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #fff;
}
.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.recurso-icon {
    font-size: 1.5em;
    margin-right: 10px;
}
.recurso-title {
    font-size: 1.1em;
    color: #333;
    margin: 0;
}
.btn {
    display: block; // Importante para Mobile-first
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    margin-top: 10px;
    text-decoration: none;
    color: white;
}
.btn-pdf { background-color: #e74c3c; }
.btn-video { background-color: #3498db; }
*/