import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlinePlus } from 'react-icons/ai';

interface OperationModalProps {
    closeModal: () => void;
}

function OperationModal({closeModal}: OperationModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const openModal = () => {
        setModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setModalOpen(false);
        closeModal();
    }
    const handleConfirm = () => {
        //Mostrar uma msg de confirmação??
    
    };
    return (
        <div>
            <button className='btn' onClick={openModal}>Nova operação <AiOutlinePlus className="mx-1" /></button>
            <Modal
            isOpen={modalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Operation Modal"
            >
            <h2>Nova operação</h2>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="">Selecione uma operação</option>
                    <option value="reserve">Reserva</option>
                    <option value="borrow">Empréstimo</option>
                </select>

                <div>
                    <button onClick={handleConfirm}>Confirmar</button>
                    <button onClick={handleCloseModal}>Fechar Modal</button>
                </div>
            </Modal>
        </div>
    );
}
export default OperationModal;