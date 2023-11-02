import React, { useEffect, useState } from 'react';
import SearchBox from '../common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultUserBox from '../ResultUserBox';
import ResultBookBox from '../ResultBookBox';
import search from '@/src/utils/search';
import myfetch from '@/src/utils/myfetch';

export default function OpModalContent(){
    const options = (type:string) => {
        if(type === 'book') return  bookOptions 
        if(type === 'user') return  userOptions 
        return [{value: '', description: ''}]
    }

    const [selectedTypeOption, setSelectedTypeOption] = useState<string>('');
    const [selectedBookOption, setSelectedBookOption] = useState<string>('');
    const [selectedUserOption, setSelectedUserOption] = useState<string>('');
    const [searchUserValue, setSearchUserValue] = useState<string>('');
    const [searchBookValue, setSearchBookValue] = useState<string>('');
    const [doUserSearch, setDoUserSearch] = useState<boolean>(false);
    const [userResult, setUserResult] = useState();
    const [doBookSearch, setDoBookSearch] = useState<boolean>(false);
    const [bookResult, setBookResult] = useState();

    async function handleSearchClick(type: string) {
        let url 
        if(type === "user"){
            url = search(type, selectedUserOption, searchUserValue)
            console.log(url)
            setDoUserSearch(true)
        }
        if(type === "book"){
            url = search(type, selectedBookOption, searchBookValue)
            console.log(url)
            setDoBookSearch(true)
        }
        await getResult(url as string, type)
        .then(() => {
            if(type === "user"){
                setDoUserSearch(false)
            }
            if(type === "book"){
                setDoBookSearch(false)
            }
        })
    };

    function handleSearchUserClick() {
        handleSearchClick("user")
    }

    function handleSearchBookClick() {
        handleSearchClick("book")
    }

    async function getResult(url:string, type: string){
        try {
            var response = await myfetch.get(url)
            if (type === "user"){
                setUserResult(response)
            }
            if (type === "book"){
                setBookResult(response)
            }
            return response
            } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
            }
    }
    
    return (
        <div className='flex-col text-black'>
            <h2 className='mb-3 mt-3'>Selecionar operação</h2>
            <select value={selectedTypeOption} onChange={e => setSelectedTypeOption(e.target.value)} className='rounded-md border bg-white border-gray-300'>
                <option value=""></option>
                <option value="reserve">Reserva</option>
                <option value="borrow">Empréstimo</option>
            </select>
            <h2 className="mb-3 mt-3">Selecionar aluno</h2>
            <SearchBox options={options('user')} onSelectChange={(value: string) => setSelectedUserOption(value)} onSearchChange={(value: string) => setSearchUserValue(value)} className='mt-5' onSearchClick={handleSearchUserClick}/>
            {
                userResult? 
                    <ResultUserBox/>
                :
                    <></>
            }
            <h2 className="mb-3 mt-3">Selecionar livro(s)</h2>
            <SearchBox options={options('book')} onSelectChange={(value: string) => setSelectedBookOption(value)} onSearchChange={(value: string) => setSearchBookValue(value)} className='mt-5' onSearchClick={handleSearchBookClick}/>
            {
                bookResult? 
                    <ResultBookBox/>
                :
                    <></>
            }
        </div>
    )
}

