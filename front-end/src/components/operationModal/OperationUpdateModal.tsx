import myfetch from "@/src/utils/myfetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { format } from 'date-fns';

interface IUpdateModalProps{
    id: string;
}

export interface IBookProps{
    code: string;
    title: string;
    author: string;
    year: string;
    belongs_to: string;
    publisher_id: string;
    status: string;
}

export interface IUserProps{
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

interface IOperationProps{
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

export default function OperationUpdateModal({id}:IUpdateModalProps){
    const [result, setResult] = useState<IOperationProps>();
    const [student, setStudent] = useState<IUserProps>();
    const [book, setBook] = useState<IBookProps>();

    useEffect(()=>{
        getOperationResult() 
    },[])

    async function getOperationResult(){
        try {
            var response = await myfetch.get(`/operation/id/${id}`)
            response = response.shift()
            const createDate =  new Date(response.createdAt)
            const expectedDate = new Date(response.expectedDate)
            const today = new Date()
            const todayNewFormat = format(today, 'dd/MM/yyyy')
            const createdAtNewFormat = format(createDate, 'dd/MM/yyyy')
            const expectedDateNewFormat = format(expectedDate, 'dd/MM/yyyy')
            const isBlocked = todayNewFormat > expectedDateNewFormat
            console.log(isBlocked)
            //AJEITAR AQUI
            setResult({...response,
            createdAt: createdAtNewFormat,
            expectedDate: expectedDateNewFormat,
            })
            getUserResult(response.studentCPF)
            getBookResult(response.bookCode)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }

    async function getUserResult(CPF: string) {
        try {
            var response = await myfetch.get(`/user/cpf/${CPF}`)
            response = response.shift()
            setStudent(response)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }

    async function getBookResult(bookCode: string) {
        try {
            var response = await myfetch.get(`/book/code/${bookCode}`)
            response = response.shift()
            setBook(response)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }



    return(
        <>
            { result && student && book ?
                <div className="text-black flex flex-col space-y-2">
                    <p>Nome do aluno: {student.name}</p>
                    <p>CPF: {student.cpf}</p>
                    <p>Intituição: {student.institution}</p>
                    <p>Título do Livro: {book.title}</p>
                    <p>Autor(a) do livro: {book.author}</p>
                    <p>Tipo de operação: {result.type === "RESERVE"? "Reserva" : 'empréstimo'}</p>
                    <p>Data da operação: {result.createdAt}</p>
                    <p>Data limite: {result.expectedDate}</p>
                    {
                        result.finalDate? 
                            result.type === "RESERVE"? 
                                <p>Reserva confirmada em: {result.finalDate}</p>
                            :
                                <p>Devolvido em: {result.finalDate}</p>
                        :
                            result.type === "RESERVE"? 
                                <p>Reserva não efetuada</p>
                            :
                                <p>Devolução em aberto</p>
                    }
                </div>
                :
                <Loading/> 
            }
        </>
    )
}