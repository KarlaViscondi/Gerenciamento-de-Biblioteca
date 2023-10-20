import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';
import OpModalContent from '../common/OpModalContent'

interface OperationModalProps {
    closeModal: () => void;
}

function OperationModal({ closeModal }: OperationModalProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleCloseModal = () => {
        closeModal();
    }

    const handleConfirm = () => {
        // Lógica para confirmação aqui
    };

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

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
                        handleSelectChange={(value: string) => setSelectedOption(value)}
                        handleSearchClick={handleConfirm} // Talvez você precise dessa função também
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
