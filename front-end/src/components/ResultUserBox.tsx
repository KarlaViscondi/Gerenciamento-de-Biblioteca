
import { booklist } from "@/data/booklist";

export default function ResultUserBox(){
    return (
        <>
                <ul className='mt-6  text-black'>
                    <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                        <p className='basis-1/6'>Código</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Nome</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>CPF</p>
                        <p className='basis-1/6'>Detalhes</p>
                    </li>
                    {/* {
                        booklist.map((book) => (
                        <BooksList key={book.id} autor={book.autor} id={book.id} title={book.title} description={book.description}/>
                        ))
                    } */}
                </ul>
        </>    
    )

}