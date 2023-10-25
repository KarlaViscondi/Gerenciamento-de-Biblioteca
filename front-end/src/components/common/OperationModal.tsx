import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';
import OpModalContent from '../common/OpModalContent';
import myfetch from '@/src/utils/myfetch';
import search from '@/src/utils/search';

interface OperationModalProps {
    closeModal: () => void;
}

function OperationModal({ closeModal }: OperationModalProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');

    const handleCloseModal = () => {
        closeModal();
    }

    async function handleConfirm() {
        if (!selectedOption || !searchValue) {
            console.error('Preencha todos os campos antes de criar uma operação.');
            return;
        }

        const url = search('operation', selectedOption, searchValue);

        try {
            const response = await myfetch.post(url, {
                selectedOption,
                searchValue,
            });

            if (response.ok) {
                console.log('Operação criada com sucesso!');
            } else {
                console.error('Erro ao criar a operação');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    const handleSearch = (value: string) => {
        setSearchValue(value);
    }

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
                        handleSearch={handleSearch}
                        handleSelectChange={(value: string) => setSelectedOption(value)}
                        handleSearchClick={handleConfirm}
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
