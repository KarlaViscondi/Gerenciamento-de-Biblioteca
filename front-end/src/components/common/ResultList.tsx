import React from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

interface IResultList{
    id: string
    column1: string;
    column2: string;
    column3: string;
    className?: string;
}

export default function ResultList ({id, column1, column2, column3, className}: IResultList):JSX.Element{
    return (
        <li className='flex flex-row items-center text-black m-3' key={id}>
            <p className="basis-1/6">{column1}</p>
            <p className="basis-2/6 ">{column2}</p>
            <p className="basis-2/6 ">{column3}</p>
            <Button className="font-normal text-sm flex items-center basis-1/6">
                <AiOutlinePlus className='mr-1'/>
                detalhes
            </Button>
            {/* <p className='hidden xm:block xm:basis-1/3'>{description}</p> */}
        </li>
    );
}



