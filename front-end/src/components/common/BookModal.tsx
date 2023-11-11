import React, { useState } from 'react';
import Modal from 'react-modal';

interface BookModalProps {
  closeModal: () => void; // Declaração da prop closeModal
}

function BookModal({ closeModal }: BookModalProps) {
    const handleCloseModal = () => {
        closeModal(); 
    }

    return (
        <div>
        <Modal
            isOpen={true}
            onRequestClose={handleCloseModal}
            ariaHideApp={false}
            contentLabel="Book Modal"
        >
            <h2>Minha Modal</h2>
            <p>Conteúdo da modal</p>
            <button onClick={handleCloseModal}>Fechar Modal</button>
        </Modal>
        </div>
    );
    }

export default BookModal;
