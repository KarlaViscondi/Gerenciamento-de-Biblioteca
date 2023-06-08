import classNames from "classnames";
import { ReactNode } from "react";
import React from "react";

interface IModal {
    children: ReactNode;
    className: string;
    action: string;
    confirm: string;
}

export default function Modal({children, className, action, confirm }:IModal):JSX.Element{
    return (
        <> 
            <label htmlFor={className} className="cursor-pointer bg-[#ABDEE6] text-black rounded-lg w-4/5 text-center uppercase tracking-wider font-extrabold p-3 mr-6">{action}</label>

            <input type="checkbox" id={className} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#eae6df]">{children}
                    <div className="modal-action">
                        <label htmlFor={className} className="bg-[#ABDEE6] text-black rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold">{confirm}</label>
                        <label htmlFor={className} className="bg-[#F3B0C3] text-black rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold">Cancelar</label>
                    </div>
                </div>
            </div>
        </>
    )
} 



