import React from "react";
import Checkbox from "./Checkbox";
import { IBook } from "@/data/booklist";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

interface IBookList extends IBook{
    className?: string;
}

export default function BooksList ({id, title, autor, description, className}: IBookList):JSX.Element{
    return (
        <li className='flex flex-row items-center text-black m-3' key={id}>
            <div className="basis-1/6">
                <Checkbox className="flex items-center bg-white border border-gray-300"/>
            </div>
            <p className="basis-2/6 ">{title}</p>
            <p className="basis-2/6 ">{autor}</p>
            <Button className="font-normal text-sm flex items-center basis-1/6">
                <AiOutlinePlus className='mr-1'/>
                detalhes
            </Button>
            {/* <p className='hidden xm:block xm:basis-1/3'>{description}</p> */}
        </li>
    );
}



