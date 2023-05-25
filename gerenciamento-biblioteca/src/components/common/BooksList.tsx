import React from "react";
import Checkbox from "./Checkbox";
import { IBook } from "@/data/booklist";

interface IBookList extends IBook{
    className?: string;
}

export default function BooksList ({id, title, autor, description, className}: IBookList):JSX.Element{
    return (
        <li className='flex flex-row text-white m-3 justify-evenly' key={id}>
            <Checkbox> </Checkbox>
                <p>{title}</p>
                <p>{autor}</p>
                <p>{description}</p>
        </li>
    );
}



