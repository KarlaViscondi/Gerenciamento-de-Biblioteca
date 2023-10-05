import React, { useEffect, useState } from 'react'
import SearchBox from './common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultsBox from './ResultsBox';
import { AiOutlinePlus } from 'react-icons/ai';
import BookModal from './common/BookModal';

interface IResultProps {
    type: string;
}
export default function Results({type}:IResultProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }


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

useEffect(()=>{
    setModalOpen(true)
    console.log(modalOpen)
},[])


const handleSelectChange = (value: string) => {
    setSelectedOption(value);
};

    return (
        <>
            <SearchBox options={options()} onChange={handleSelectChange} className='mt-5'/>
            <div className=' mx-2 border border-gray-300 mt-6 h-auto rounded-lg md:mx-auto relative'>
                <div className='flex py-2 justify-end border-b border-gray-300 items-center'>
                    <button className="btn" onClick={openModal}>teste</button>
                    <BookModal open={modalOpen} close={closeModal}/>
                        
                    
                    
                    {/* <button onClick={openModal} className="flex items-center">
                        {registerOption()}
                        <AiOutlinePlus className="mx-1" />
                    </button>
                    {selectedOption === 'Cadastrar novo livro' && (
                    <BookModal open={modalOpen} close={() => setModalOpen(false)} />
                    )}
                    {selectedOption === 'Cadastrar novo usuário' && (
                    <UserModal open={modalOpen} close={() => setModalOpen(false)} />
                    )}
                    {selectedOption === 'Cadastrar nova operação' && (
                    <OperationModal open={modalOpen} close={() => setModalOpen(false)} />
                    )} */}
                    </div>
                <ResultsBox/>
            </div>

        </>
    )
}