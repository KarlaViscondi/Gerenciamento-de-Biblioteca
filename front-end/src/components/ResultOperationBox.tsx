import ResultList from "./common/ResultList";

;
export interface IOperationParams {
    id: string;
    createdAt: string;
    expectedDate: string;
    finalDate?: string;
    type: string;
    bookCode: string;
    studentCPF: string;
    cpf_borrowed_by?: string;
    cpf_returned_by?: string;
  }

interface ISelectedOption{
    result: IOperationParams[] |  undefined;
}

export default function ResultOperationBox({result}:ISelectedOption){
    return (
        <>
                <ul className='mt-6  text-black'>
                    <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                        <p className='basis-1/6'>Tipo</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Código do Livro</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>CPF Aluno</p>
                        <p className='basis-1/6'>Detalhes</p>
                    </li>
                    {
                        result != undefined? 
                            result.map((result) => (
                            <ResultList id={result.id} column1={result.type} column2={result.bookCode} column3={result.studentCPF}/>
                            ))
                        :
                        <p>Realize uma pesquisa</p>
                    }
                </ul>
        </>    
    )

}