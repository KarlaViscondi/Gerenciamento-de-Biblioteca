
import Modal from "./Modal"

// interface IModalProps{
//     open : boolean;
//     close: () => void;
// }

// export default function BookModal ({open, close}:IModalProps){
//     return (
//         <dialog id="my_modal_1" className="modal" open={open}>
//             <div className="modal-box">
//                 <h3 className="font-bold text-lg">Hello!</h3>
//                 <p className="py-4">Press ESC key or click the button below to close</p>
//                 <div className="modal-action">
//                 <form method="dialog">
//                     {/* if there is a button in form, it will close the modal */}
//                     <button className="btn" onClick={close}>Close</button>
//                 </form>
//                 </div>
//             </div>
//         </dialog>
//     )
// }




// export function BookModal({ open, close }: { open: boolean; close: () => void }) {
//     return (
//         <Modal
//             className="modal-button" action={'Cadastrar novo livro'} confirm={'Confirmar'}
//             // className="modal-book" 
//             // action="Cadastrar novo livro"
//             // confirm="Confirmar"
//             open={open}
//             close={close}
//         >
//             {/* Conteúdo */}
//             <h2>Cadastrar novo livro</h2>
//             {/* Outros campos */}
//             <button onClick={close}>Fechar</button>
//         </Modal>
//         );
//     }
    
//     // Componente Modal para cadastrar um novo usuário
// export function UserModal({ open, close }: { open: boolean; close: () => void }) {
//         return (
//         <Modal
//             className="modal-user" 
//             action="Cadastrar novo usuário"
//             confirm="Confirmar"
//             open={open}
//             close={close}
//         >
//             {/* Conteúdo */}
//             <h2>Cadastrar novo usuário</h2>
//             {/* Outros campos */}
//             <button onClick={close}>Fechar</button>
//         </Modal>
//         );
//     }
    
//     // Componente Modal para cadastrar uma nova operação
// export function OperationModal({ open, close }: { open: boolean; close: () => void }) {
//         return (
//         <Modal
//             className="modal-operation" 
//             action="Cadastrar nova operação"
//             confirm="Confirmar"
//             open={open}
//             close={close}
//         >
//             {/* Conteúdo */}
//             <h2>Cadastrar nova operação</h2>
//             {/* Outros campos do formulário */}
//             <button onClick={close}>Fechar</button>
//         </Modal>
//     );
// }