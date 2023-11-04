import ResultList from "./common/ResultList";

export interface IUserParams {
    cpf: string;
    email: string;
    password: string;
    name: string;
    code: string;
    phone: string;
    birth_date: Date;
    house_number: string;
    complements: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    institution: string;
    role: string;
}

interface ISelectedOption{
    result?: IUserParams[] |  undefined;
}

export default function ResultUserBox({result}:ISelectedOption){
    return (
        <>
                <ul className='mt-6  text-black'>
                    <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                        <p className='basis-1/6'>Código</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>Nome</p>
                        <p className='basis-2/6 xm:basis-1/4 flex-grow'>CPF</p>
                        <p className='basis-1/6'>Detalhes</p>
                    </li>
                    {
                        result != undefined? 
                        result.map((result) => (
                        <ResultList id={result.cpf} column1={result.code} column2={result.name} column3={result.cpf}/>
                        ))
                    :
                        <></>
                    }
                </ul>
        </>    
    )

}