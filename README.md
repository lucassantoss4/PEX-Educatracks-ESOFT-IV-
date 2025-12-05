# 📚 Módulo Educatracks: Sistema de Gestão de Conteúdo

**Projeto de Extensão (PEX IV) em Engenharia de Software**

Este repositório contém o código-fonte do **Módulo Educatracks V. Beta**, desenvolvido em parceria com a **ONG Educafro** para otimizar a organização e o acesso a materiais de estudo para jovens universitários e vestibulandos.

## 🎯 1. Alinhamento com o Desenvolvimento Sustentável (ODS)

O projeto contribui diretamente para o **Objetivo de Desenvolvimento Sustentável (ODS) 4: Educação de Qualidade**, ao fornecer uma **infraestrutura digital** que visa **reduzir as barreiras** de acesso e a dispersão de informações, promovendo maior eficiência e equidade no processo de estudo.

## ✨ 2. Funcionalidades (MVP - Versão Beta)

O Módulo *Educatracks* implementa o **Core** do sistema de gestão, focado na leitura e organização dos dados:

  * **RF002: Organização por Trilha de Conhecimento:** Exibição clara dos recursos de estudo classificados por área (Ex: Matemática, Humanas).
  * **RF003: Alerta de Prazos (Visual):** Exibição de recursos classificados como 'Edital' ou 'Prazo' em destaque.
  * **Consulta de Recursos (CRUD - Read):** API funcional para buscar e listar todos os materiais salvos no banco de dados.
  * **RNF001: Design Responsivo:** Interface otimizada para visualização em dispositivos móveis (*Mobile-first*).

## 💻 3. Stack Tecnológica

O projeto utiliza uma arquitetura **Full-Stack (Client-Server)** baseada em JavaScript:

| Componente | Tecnologia | Função |
| :--- | :--- | :--- |
| **Back-end (API)** | **Node.js** (Express) | Servidor e lógica de negócios. |
| **Banco de Dados** | **PostgreSQL** (via Sequelize ORM) | Persistência e modelagem de dados relacionais. |
| **Front-end (UI)** | **React** | Interface do usuário e consumo da API. |
| **Testes** | **Jest/Mocha (Unidade)** | Garantia da integridade do Modelo de Dados. |

## 🚀 4. Como Rodar o Projeto

Siga as instruções para configurar e iniciar o Back-end e o Front-end separadamente.

### 4.1. Pré-Requisitos

Certifique-se de ter instalado em sua máquina:

  * **Node.js (v14+):** Inclui o npm (ou yarn).
  * **PostgreSQL:** Servidor de banco de dados rodando localmente.
  * **Git:** Para clonar o repositório.

### 4.2. Instalação e Configuração do Back-end

O Back-end deve ser iniciado primeiro, pois fornece a API ao Front-end.

1.  **Clonar o Repositório:**
    ```bash
    git clone [Link do seu Repositório]
    cd PEX-Educatracks-ESOFT-IV/src/backend
    ```
2.  **Instalar Dependências:**
    ```bash
    npm install
    ```
3.  **Configurar o Banco de Dados:**
      * Crie um banco de dados vazio no PostgreSQL (Ex: `educatracks_db`).
      * Crie um arquivo `.env` (ou `config/database.js`) na pasta `/backend` com suas credenciais do DB (usuário, senha, nome do DB).
      * *Nota:* O Sequelize se encarregará de criar as tabelas (`Recursos`, `Trilhas`, etc.) na inicialização (`server.js`).
4.  **Iniciar o Servidor:**
    ```bash
    npm start 
    # O servidor estará rodando em http://localhost:3001
    ```

### 4.3. Instalação e Execução do Front-end

O Front-end consumirá a API rodando na porta 3001.

1.  **Acessar a Pasta do Front-end:**
    ```bash
    cd ../frontend
    ```
2.  **Instalar Dependências:**
    ```bash
    npm install
    ```
3.  **Iniciar o Cliente React:**
    ```bash
    npm start
    # O navegador será aberto automaticamente em http://localhost:3000
    ```

## 📐 5. Estrutura do Repositório (Evidência Técnica)

O projeto segue um padrão modular com foco na clareza e manutenibilidade, conforme as melhores práticas de Engenharia de Software.

  * `src/backend/models/`: Contém o Modelo `Recurso` e o Teste de Unidade (evidência de qualidade).
  * `src/backend/routes/`: Contém a Rota funcional `recursos.js` (`GET`).
  * `src/frontend/components/`: Contém o Componente `CardRecurso.jsx` e a lógica de exibição.
  * `docs/`: Contém a **Documentação de Requisitos** e os **Relatórios de Teste** (Anexos B e D).

-----

**Com este `README.md`, você garante que o seu trabalho técnico está bem apresentado e é facilmente executável\!**

**O que você precisa agora: implementar a rota de Criação (`POST`) ou a lógica de Filtro (`GET` com parâmetros) para completar o código antes do Teste de Usabilidade?**
