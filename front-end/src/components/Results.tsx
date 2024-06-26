import React, { useEffect, useState } from 'react'
import SearchBox from './common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultsBox from './ResultBookBox';
import { AiOutlinePlus } from 'react-icons/ai';
import BookModal from './common/BookModal';
import OperationModal from './operationModal/OperationModal';
import UserModal from './common/UserModal';
import ResultBookBox from './ResultBookBox';
import ResultUserBox from './ResultUserBox';
import ResultOperationBox from './ResultOperationBox';
import search from '../utils/search'
import myfetch from '../utils/myfetch';

interface IResultProps {
    type: string;
}

export default function Results({type}:IResultProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [doSearch, setDoSearch] = useState<boolean>(false);
    const [result, setResult] = useState();

    const options = () => {
        if(type === 'book') return  bookOptions 
        if(type === 'user') return  userOptions 
        if(type === 'operation') return  operationOptions 
        return [{value: '', description: ''}]
    }

    const registerOption = () => {
        if(type === 'book') return  'Cadastrar novo livro' 
        if(type === 'user') return  'Cadastrar novo usuário' 
        if(type === 'operation') return  'Cadastrar nova operação' 
        return ''
    }

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };
    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    async function handleSearchClick() {
        setDoSearch(true)
        const url = search(type, selectedOption, searchValue)
        await getResult(url as string)
        .then(() => {
            setDoSearch(false)
        })
    };

    async function getResult(url:string){
        try {
            var response = await myfetch.get(url)
            setResult(response)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }

    const [bookModalOpen, setBookModalOpen] = useState(false);
    const [userModalOpen, setUserModalOpen] = useState(false);
    const [operationModalOpen, setOperationModalOpen] = useState(false);
    const openModal = (entityType: string) => {
            if (entityType === 'book') {
            setBookModalOpen(true);
            } else if (entityType === 'user') {
            setUserModalOpen(true);
            } else if (entityType === 'operation') {
            setOperationModalOpen(true);
            }
        }

    useEffect(()=>{
        setResult(undefined) 
    }, [type])

    return (
        <>
            <SearchBox options={options()} onSelectChange={handleSelectChange} onSearchChange={handleSearchChange} className='mt-5' onSearchClick={handleSearchClick}/>
            <div className=' mx-2 border border-gray-300 mt-6 h-auto rounded-lg md:mx-auto relative'>
                <div className='flex py-2 justify-end border-b border-gray-300 items-center'>
                <button className="btn" onClick={() => openModal(type)}>
                    {registerOption()}
                </button>
                </div>
                {bookModalOpen && <BookModal closeModal={() => setBookModalOpen(false)} />}
                {userModalOpen && <UserModal closeModal={() => setUserModalOpen(false)} />}
                {operationModalOpen && <OperationModal closeModal={() => setOperationModalOpen(false)} />}


                {type === 'book'? 
                    <ResultBookBox result={result}/> 
                :   type === 'user'? 
                    <ResultUserBox result={result}/>
                :
                    <ResultOperationBox result={result}/>
                }                
            </div>

        </>
    )
}