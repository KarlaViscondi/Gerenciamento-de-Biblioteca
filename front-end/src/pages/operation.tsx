import React, { useState } from 'react';
import myfetch from '../utils/myfetch'

function OperationSearch() {
    const [searchOption, setSearchOption] = useState('all'); // Opção de pesquisa padrão
    const [searchText, setSearchText] = useState(''); // Texto de pesquisa

    async function handleSearch() {
        // Monta os parâmetros da pesquisa com base na opção escolhida
        let url = `/operation`; // URL padrão 

        if (searchOption === 'cpf') {
        url = `/operation/student/${encodeURIComponent(searchText)}`; // disponíveis
        } else if (searchOption === 'bookCode') {
        url = `/operation/book/${encodeURIComponent(searchText)}`; // emprestados
        } else if (searchOption === 'id') {
        url = `/operation/id/${encodeURIComponent(searchText)}`; // reservados
        } else if (searchOption === 'reserves') {
        url = `/operation/type/RESERVE`; // por título
        } else if (searchOption === 'borrows') {
            url = `/operation/type/BORROW`; // por título
        }

        // Realiza a chamada à API com os parâmetros de pesquisa
        try {
        const response = await myfetch.get(url)

        if (response.ok) {
            const data = await response.json();
            // atualiza a lista de livros com os dados retornados
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
