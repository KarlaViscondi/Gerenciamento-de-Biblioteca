import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';
import OpModalContent from '../common/OpModalContent'

interface OperationModalProps {
    closeModal: () => void;
}

function OperationModal({ closeModal }: OperationModalProps) {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [result, setResult] = useState('');

    const handleCloseModal = () => {
        closeModal();
    }

    const handleConfirm = () => {
        // Lógica para confirmação aqui
    };

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };
    // const handleSearch = async (value: string) => {
    //     setSearchValue(value);
    //     try {
    //         const searchResults = await performSearch(selectedOption, value);
    //         setResult(searchResults);
    //     } catch (error) {
    //         console.error('Erro na pesquisa:', error);
    //     }
    // };

    const modalStyles = {
        content: {
            width: '55%', // Largura 
            height: '55vh', // Altura 
            margin: 'auto', 
            padding: '40px', 
            display: 'flex',
            flexDirection: 'column',
            
        },
    };

    return (
        <div>
            <div>
                <Modal
                    isOpen={true} 
                    onRequestClose={handleCloseModal}
                    contentLabel="Operation Modal"
                    style={modalStyles}
                >
                    <OpModalContent
                    selectedOption={selectedOption}
                    searchValue={searchValue}
                    result={result}
                    handleSearch={handleSearch}
                />
                <div>
                    <button onClick={handleConfirm}>Confirmar</button>
                    <button onClick={handleCloseModal}>Fechar</button>
                </div>
                </Modal>
            </div>
        </div>
    );
}
export default OperationModal;
