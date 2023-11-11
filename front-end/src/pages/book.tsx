import React, { useState } from 'react';


function BookSearch() {
    const [searchOption, setSearchOption] = useState('all'); // Opção de pesquisa padrão
    const [searchText, setSearchText] = useState(''); // Texto de pesquisa

    async function handleSearch() {
        // Monta os parâmetros da pesquisa com base na opção escolhida
        let backUrl = "http://localhost:8080";
        let url = `${backUrl}/book`; // URL padrão 

        if (searchOption === 'available') {
        url = `${backUrl}/book/available`; // disponíveis
        } else if (searchOption === 'borrowed') {
        url = `${backUrl}/book/borrowed`; // emprestados
        } else if (searchOption === 'reserved') {
        url = `${backUrl}/book/reserved`; // reservados
        } else if (searchOption === 'title') {
        url = `${backUrl}/book/title/${encodeURIComponent(searchText)}`; // por título
        } else if (searchOption === 'author') {
        url = `${backUrl}/book/author/${encodeURIComponent(searchText)}`; // por autor
        } else if (searchOption === 'code') {
        url = `${backUrl}/book/code/${encodeURIComponent(searchText)}`; // por código
        }

        // Realiza a chamada à API com os parâmetros de pesquisa
        try {
        const response = await fetch(url)

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
            <option value="all">Todos os livros</option>
            <option value="available">Livros disponíveis</option>
            <option value="borrowed">Livros emprestados</option>
            <option value="reserved">Livros reservados</option>
            <option value="title">Por título</option>
            <option value="author">Por autor</option>
            <option value="code">Por código</option>
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

export default BookSearch;
