import ResultList from "./common/ResultList";

export interface IBookParams {
    code: string;
    title: string;
    author: string;
    year: string;
    belongs_to: string;
    publisher_id: string;
    status: string;    
}

interface ISelectedOption{
    result?: IBookParams[] |  undefined;
    input?: boolean;
    handleBookChange?: (bookCode:string) => void;
    checkedBook?: string | undefined;
}
export default function ResultBookBox({result, input, handleBookChange, checkedBook}:ISelectedOption){
    return (
        <>
                <ul className='mt-6  text-black'>
                    <li className='flex flex-row gap-6 xm:gap-0 items-start text-black m-3 '>
                        <p className='basis-1/6'>Código</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Título</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Autor</p>
                        <p className='basis-1/6'>Detalhes</p>
                    </li>
                    {
                        result != undefined? 
                        result.map((result) => (
                        <ResultList key={result.code} id={result.code} column1={result.code} column2={result.title} column3={result.author} input={input} handleChange={handleBookChange} checkedInput={checkedBook} type="book"/>
                        ))
                    :
                        <></>
                    }
                </ul>
        </>    
    )

}