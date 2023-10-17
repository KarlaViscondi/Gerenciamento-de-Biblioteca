import React, { useState } from 'react';
import Modal from 'react-modal';

interface BookModalProps {
  closeModal: () => void; // Declaração da prop closeModal
}

function BookModal({ closeModal }: BookModalProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    // Use a prop closeModal para fechar a modal
    const handleCloseModal = () => {
        setModalOpen(false);
        closeModal(); // Chama a função de fechamento passada como prop
    }

    return (
        <div>
        <button className='btn' onClick={openModal}>Abrir Modal</button>
        <Modal
            isOpen={modalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Exemplo de Modal"
        >
            <h2>Minha Modal</h2>
            <p>Conteúdo da modal</p>
            <button onClick={handleCloseModal}>Fechar Modal</button>
        </Modal>
        </div>
    );
    }

export default BookModal;
