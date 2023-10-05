import React, { useState } from 'react';
import Modal from 'react-modal';

function UserModal() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    
    const closeModal = () => {
        setModalOpen(false);
    }
    
    return (
        <div>
            <button className='btn' onClick={openModal}>Abrir Modal</button>
            <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Exemplo de Modal"
            >
            <h2>Minha Modal</h2>
            <p>Conteúdo da modal</p>
            <button onClick={closeModal}>Fechar Modal</button>
            </Modal>
        </div>
    );
}
export default UserModal;