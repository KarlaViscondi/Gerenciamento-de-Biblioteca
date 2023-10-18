import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';


interface OperationModalProps {
    closeModal: () => void;
}

function OperationModal({ closeModal }: OperationModalProps) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleCloseModal = () => {
        closeModal();
    }

    const handleConfirm = () => {
        // Lógica para confirmação aqui
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
                    <h2>Nova operação</h2>
                    <select style={{width:'50%', marginTop:'40px', marginBottom:'80px'}}
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="">Selecione uma operação</option>
                        <option value="reserve">Reserva</option>
                        <option value="borrow">Empréstimo</option>
                    </select>

                    <div>
                        <button onClick={handleConfirm} >Confirmar</button>
                        <button onClick={handleCloseModal} >Fechar</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
export default OperationModal;
