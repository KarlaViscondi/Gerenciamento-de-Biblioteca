import React, { useEffect, useState } from 'react';
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import OperationModal from "../operationModal/OperationModal";

interface IResultList{
    id: string
    column1: string;
    column2: string;
    column3: string;
    className?: string;
}

export default function ResultList ({id, column1, column2, column3, className}: IResultList):JSX.Element{
    const [operationModalOpen, setOperationModalOpen] = useState(false);

    return (
        <li className='flex flex-row items-center text-black m-3' key={id}>
            <p className="basis-1/6">{column1}</p>
            <p className="basis-2/6 ">{column2}</p>
            <p className="basis-2/6 ">{column3}</p>
            <button className="font-normal text-sm flex items-center basis-1/6" onClick={() => setOperationModalOpen(true)}>
                <AiOutlinePlus className='mr-1'/>
                detalhes
            </button>
            {operationModalOpen && <OperationModal closeModal={() => setOperationModalOpen(false)} id={id} />}
        </li>
    );
}



