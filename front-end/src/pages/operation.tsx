import React, { useState } from 'react';


function OperationSearch() {
    const [searchOption, setSearchOption] = useState('all'); // Opção de pesquisa padrão
    const [searchText, setSearchText] = useState(''); // Texto de pesquisa

    async function handleSearch() {
        // Monta os parâmetros da pesquisa com base na opção escolhida
        let backUrl = "http://localhost:8080";
        let url = `${backUrl}/operation`; // URL padrão 

        if (searchOption === 'cpf') {
        url = `${backUrl}/operation/student/${encodeURIComponent(searchText)}`; // disponíveis
        } else if (searchOption === 'bookCode') {
        url = `${backUrl}/operation/book/${encodeURIComponent(searchText)}`; // emprestados
        } else if (searchOption === 'id') {
        url = `${backUrl}/operation/id/${encodeURIComponent(searchText)}`; // reservados
        } else if (searchOption === 'reserves') {
        url = `${backUrl}/operation/type/RESERVE`; // por título
        } else if (searchOption === 'borrows') {
            url = `${backUrl}/operation/type/BORROW`; // por título
        }

        // Realiza a chamada à API com os parâmetros de pesquisa
        try {
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json();
            // atualiza a lista de livros com os dados retornados
            console.log(`'Resultado da pesquisa:'`, data);
        } else {
            console.error('Erro na solicitação:', response.statusText);
        }
        } catch (error) {
        // Trate erros aqui
        console.error('Erro na pesquisa:', error);
        }
    }

    return (
        <div>
        <select
            value={searchOption}
            onChange={(e) => setSearchOption(e.target.value)}
        >
            <option value="all">Todos as operações</option>
            <option value="cpf">Por CPF</option>
            <option value="bookCode">Por código do livro</option>
            <option value="id">Por id da operação</option>
            <option value="reserves">Reservas</option>
            <option value="borrows">Empréstimos</option>

        </select>
        <input
            type="text"
            placeholder="Digite o texto de pesquisa"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        </div>
    );
}

export default OperationSearch;
