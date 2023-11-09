import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import OpModalContent from './OpModalContent';
import OperationUpdateModal from './OperationUpdateModal';


interface OperationModalProps {
    closeModal: () => void;
    id?: string;
}

function OperationModal({ closeModal, id }: OperationModalProps) {
   
    const handleCloseModal = () => {
        closeModal();
    }

    return (
            <div>
                <Modal
                    isOpen={true}
                    onRequestClose={handleCloseModal}
                    ariaHideApp={false}
                    contentLabel="Operation Modal"
                    className="w-3/5 h-3/5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 overflow-y-scroll p-10 rounded-md border bg-white border-gray-300"
                >
                    {
                        id? 
                            <OperationUpdateModal id={id}/>
                        :
                            <OpModalContent/>
                    }
                <div className='flex flex-row space-x-8 justify-end mt-4'>
                    <button onClick={handleCloseModal}>Fechar</button>
                    {/* <button onClick={handleConfirm}>Confirmar</button> */}
                </div>
                </Modal>
            </div>
    );
}

export default OperationModal;
