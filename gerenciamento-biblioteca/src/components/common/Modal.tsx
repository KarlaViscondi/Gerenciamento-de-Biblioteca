import classNames from "classnames";
import { ReactNode } from "react";
import React from "react";

interface IModal {
    children: ReactNode;
    className: string;
}

export default function Modal({children, className }:IModal):JSX.Element{
    return (
        <> 
            <label htmlFor={className} className="cursor-pointer bg-[#ABDEE6] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold mh-6 p-3 mb-6 mr-6">Prosseguir</label>

            <input type="checkbox" id={className} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#eae6df] opacity-75">{children}
                    <div className="modal-action">
                        <label htmlFor={className} className="bg-[#ABDEE6] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold">Confirmar reserva</label>
                        <label htmlFor={className} className="bg-[#F3B0C3] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold">Voltar</label>
                    </div>
                </div>
            </div>
        </>
    )
} 



