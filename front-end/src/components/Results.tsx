import React, { useEffect, useState } from 'react'
import SearchBox from './common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultsBox from './ResultsBox';
import { AiOutlinePlus } from 'react-icons/ai';
import BookModal from './common/BookModal';
import OperationModal from './common/OperationModal';
import UserModal from './common/UserModal';


interface IResultProps {
    type: string;
}
export default function Results({type}:IResultProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');

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

// useEffect(()=>{
//     setModalOpen(true)
//     console.log(modalOpen)
// },[])


    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <SearchBox options={options()} onChange={handleSelectChange} className='mt-5'/>
            <div className=' mx-2 border border-gray-300 mt-6 h-auto rounded-lg md:mx-auto relative'>
                <div className='flex py-2 justify-end border-b border-gray-300 items-center'>
                {/* <button className="btn" onClick={openModal}>teste</button> */}
                {modalOpen && <BookModal />}
                {modalOpen && <OperationModal />}
                {modalOpen && <UserModal />}
                {/* PRECISA ARRUMAR PARA FICAR UM BOTAO SÓ E RECONHECER A MODAL PARA AQUELA PAG */}
                </div>
                <ResultsBox/>
            </div>

        </>
    )
}