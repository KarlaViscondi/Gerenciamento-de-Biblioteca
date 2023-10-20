import React, { useState, useEffect } from 'react';
import search from '@/src/utils/search';
import myfetch from '@/src/utils/myfetch';
import OpModalContent from './OpModalContent';

interface IResultProps {
    type: string;
}

function Results({ type }: IResultProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [doSearch, setDoSearch] = useState<boolean>(false);
    const [result, setResult] = useState();

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    async function handleSearchClick() {
        setDoSearch(true);
        const url = search(type, selectedOption, searchValue);
        await getResult(url as string).then(() => {
            setDoSearch(false);
        });
    }

    async function getResult(url: string) {
        try {
            var response = await myfetch.get(url);
            setResult(response);
            return response;
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa';
        }
    }

    return (
        <div>
            <OpModalContent
                selectedOption={selectedOption}
                searchValue={searchValue}
                result=''
                handleSearch={handleSearchChange} 
                handleSelectChange={handleSelectChange} 
                handleSearchClick={handleSearchClick} 
            />
            <button onClick={handleSearchClick}>Pesquisar</button>

            {/* resultados */}
        </div>
    );
}

export default Results;
