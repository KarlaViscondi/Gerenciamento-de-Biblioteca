import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';
import OpModalContent from '../common/OpModalContent'
import myfetch from '@/src/utils/myfetch';

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

    async function handleConfirm(selectedOption: string, searchValue: string, url:string) {
        try {
            const response = await myfetch.post(url, {
                selectedOption, // Os dados necessários para criar a operação
                searchValue,
            });
    
            if (response.ok) {
                // A operação foi criada com sucesso
                console.log('Operação criada com sucesso!');
            } else {
                // Lida com erros na criação da operação (por exemplo, validações no servidor)
                console.error('Erro ao criar a operação');
            }
        } catch (error) {
            // Lida com erros na requisição (por exemplo, falha na rede)
            console.error('Erro na requisição:', error);
        }
    }
    

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
                        handleSearchClick={handleConfirm}              />
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
