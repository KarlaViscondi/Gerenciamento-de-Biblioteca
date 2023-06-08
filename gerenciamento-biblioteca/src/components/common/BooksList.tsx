import React from "react";
import Checkbox from "./Checkbox";
import { IBook } from "@/data/booklist";

interface IBookList extends IBook{
    className?: string;
}

export default function BooksList ({id, title, autor, description, className}: IBookList):JSX.Element{
    return (
        <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3' key={id}>
            <div className="basis-1/4 xm:basis-1/6">
                <Checkbox className="flex items-center"/>
            </div>
            <p className="basis-1/4 xm:basis-1/4">{title}</p>
            <p className="basis-1/4 xm:basis-1/4">{autor}</p>
            <p className='hidden xm:block xm:basis-1/3'>{description}</p>
        </li>
    );
}



