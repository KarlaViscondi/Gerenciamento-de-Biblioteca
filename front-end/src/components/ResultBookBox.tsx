import { AiOutlinePlus } from "react-icons/ai";
import { GiBookmark } from "react-icons/gi";
import BooksList from "./common/BooksList";
import { booklist } from "@/data/booklist";

export default function ResultBookBox(){
    return (
        <>
                <ul className='mt-6  text-black'>
                    <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                        <p className='basis-1/6'>Código</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Título</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Autor</p>
                        <p className='basis-1/6'>Detalhes</p>
                    </li>
                    {
                        booklist.map((book) => (
                        <BooksList key={book.id} autor={book.autor} id={book.id} title={book.title} description={book.description}/>
                        ))
                    }
                </ul>
        </>    
    )

}