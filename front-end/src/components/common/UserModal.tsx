import React, { useState } from 'react';
import Modal from 'react-modal';

interface UserModalProps {
    closeModal: () => void;
}

function UserModal({closeModal}: UserModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    
    const handleCloseModal = () => {
        setModalOpen(false);
        closeModal();
    }
    
    return (
        <div>
            <Modal
            isOpen={true}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            contentLabel="User Modal"
            >
            <h2>Minha Modal</h2>
            <p>Conteúdo da modal</p>
            <button onClick={handleCloseModal}>Fechar Modal</button>
            </Modal>
        </div>
    );
}
export default UserModal;