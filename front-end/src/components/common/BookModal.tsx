
interface IModalProps{
    open : boolean;
    close: () => void;
}

export default function BookModal ({open, close}:IModalProps){
    return (
        <dialog id="my_modal_1" className="modal" open={open}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={close}>Close</button>
                </form>
                </div>
            </div>
        </dialog>
    )
}
