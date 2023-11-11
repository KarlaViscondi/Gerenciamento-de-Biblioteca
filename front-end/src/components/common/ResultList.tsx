import React, { useEffect, useState } from 'react';
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import OperationModal from "../operationModal/OperationModal";
import BookModal from './BookModal';
import UserModal from './UserModal';

interface IResultList{
    id: string
    column1: string;
    column2: string;
    column3: string;
    className?: string;
    input?: boolean; 
    handleChange?: (id:string) => void;
    checkedInput?: string | undefined;
    type: string;
}

export default function ResultList ({id, column1, column2, column3, className, input,handleChange, checkedInput, type}: IResultList):JSX.Element{
    const [operationModalOpen, setOperationModalOpen] = useState(false);
    const [bookModalOpen, setBookModalOpen] = useState(false);
    const [userModalOpen, setUserModalOpen] = useState(false);

    function isDisabled() {
        if (checkedInput === undefined || checkedInput === id){
            return false
        }
        return true
    }
    
    function onDetailClick(){
        if(type === "operation"){
            setOperationModalOpen(true)
        }
        if(type === "user"){
            setUserModalOpen(true)
        }
        if(type === "book"){
            setBookModalOpen(true)
        }
    }

    return (
        <li className='flex flex-row items-center text-black m-3'>
            {
                input?
                    <input type='checkbox' className={`${
                        isDisabled() ? 'cursor-not-allowed opacity-50' : ''
                      }`} value={id} onChange={handleChange? ()=>handleChange(id): ()=> ''}
                    disabled={isDisabled()}
                    ></input>
                :
                <></>

            }
            <p className="basis-1/6">{column1}</p>
            <p className="basis-2/6 ">{column2}</p>
            <p className="basis-2/6 ">{column3}</p>
            <button className="font-normal text-sm flex items-center basis-1/6" onClick={onDetailClick}>
                <AiOutlinePlus className='mr-1'/>
                detalhes
            </button>
            {operationModalOpen && <OperationModal closeModal={() => setOperationModalOpen(false)} id={id} />}
            {bookModalOpen && <BookModal closeModal={() => setBookModalOpen(false)} />}
            {userModalOpen && <UserModal closeModal={() => setUserModalOpen(false)} />}
        </li>
    );
}



