// Arquivo: src/frontend/pages/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import CardRecurso from '../components/CardRecurso'; // Seu componente
import './Dashboard.css';

const Dashboard = () => {
    const [recursos, setRecursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efeito para buscar os dados da API ao carregar o componente
    useEffect(() => {
        const fetchRecursos = async () => {
            try {
                // Chama a API que você acabou de criar (Passo 3.2)
                const response = await fetch('http://localhost:3001/api/recursos'); 
                
                if (!response.ok) {
                    throw new Error('Falha ao carregar os recursos da API.');
                }
                
                const data = await response.json();
                setRecursos(data);
                
            } catch (err) {
                setError("Não foi possível conectar ao servidor de recursos.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecursos();
    }, []); // Array vazio garante que o useEffect rode apenas uma vez

    if (loading) {
        return <div className="loading">Carregando materiais de estudo...</div>;
    }

    if (error) {
        return <div className="error">{error} Certifique-se de que o Back-end está rodando na porta 3001.</div>;
    }

    return (
        <div className="dashboard-container">
            <h2>📚 Materiais Organizados - ODS 4</h2>
            <p>Encontrados {recursos.length} recursos disponíveis na Educafro.</p>
            
            <div className="recursos-list">
                {recursos.length > 0 ? (
                    recursos.map(recurso => (
                        // Renderiza o componente CardRecurso para cada item
                        <CardRecurso key={recurso.id} recurso={recurso} />
                    ))
                ) : (
                    <div className="no-data">Nenhum recurso de estudo encontrado.</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;