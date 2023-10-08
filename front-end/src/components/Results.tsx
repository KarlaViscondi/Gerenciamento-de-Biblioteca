import React, { useEffect, useState } from 'react'
import SearchBox from './common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultsBox from './ResultBookBox';
import { AiOutlinePlus } from 'react-icons/ai';
import BookModal from './common/BookModal';
import OperationModal from './common/OperationModal';
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

    useEffect(()=>{
        console.log(result)
        console.log(doSearch)
    },[result])

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <SearchBox options={options()} onSelectChange={handleSelectChange} onSearchChange={handleSearchChange} className='mt-5' onSearchClick={handleSearchClick}/>
            <div className=' mx-2 border border-gray-300 mt-6 h-auto rounded-lg md:mx-auto relative'>
                <div className='flex py-2 justify-end border-b border-gray-300 items-center'>
                {/* <button className="btn" onClick={openModal}>teste</button> */}
                {modalOpen && <BookModal />}
                {modalOpen && <OperationModal />}
                {modalOpen && <UserModal />}
                {/* PRECISA ARRUMAR PARA FICAR UM BOTAO SÓ E RECONHECER A MODAL PARA AQUELA PAG */}
                </div>

                {type === 'book'? 
                    <ResultBookBox/> 
                :   type === 'user'? 
                    <ResultUserBox/>
                :
                    <ResultOperationBox result={result}/>
                }                
            </div>

        </>
    )
}