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
    const [blocked, setBlocked] = useState<boolean>()

    useEffect(()=>{
        getOperationResult() 
    },[result])

    async function getOperationResult(){
        try {
            var response = await myfetch.get(`/operation/id/${id}`)
            response = response.shift()
            const createDate =  new Date(response.createdAt)
            const expectedDate = new Date(response.expectedDate)
            const today = new Date()
            const createdAtNewFormat = format(createDate, 'dd/MM/yyyy')
            const expectedDateNewFormat = format(expectedDate, 'dd/MM/yyyy')
            const isBlocked = expectedDate < today
            setBlocked(isBlocked)
            if(response?.finalDate){
                const finalDate = new Date(response.finalDate)
                const finalDateNewFormat = format(finalDate, 'dd/MM/yyyy')
                setResult({...response,
                    createdAt: createdAtNewFormat,
                    expectedDate: expectedDateNewFormat,
                    finalDate: finalDateNewFormat,
                })
            } else {
                setResult({...response,
                    createdAt: createdAtNewFormat,
                    expectedDate: expectedDateNewFormat,
                })
            }
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

    async function handleCreateOperation() {
        try {
            var body = {
                type: "BORROW",
                bookCode: result?.bookCode,
                studentCPF: result?.studentCPF
            }
            const operation = await myfetch.post('/operation', body)
            console.log(operation);
            
            alert(`Empréstimo realizado com sucesso! Número da requisição: ${operation.id}`)
            return 
            } catch (error) {
            console.error('Erro na criação:', error);
            return 'Erro na criação'
        }
    }

    async function handleUpdateOperation() {
            try {
                const date = new Date()
                const dateIsoFormat = date.toISOString()
                const body = {
                    finalDate: dateIsoFormat
                }
                await myfetch.put(`/operation/update/${id}`, body)
                if(result?.type==="RESERVE"){
                    handleCreateOperation()
                } else if(result?.type==="BORROW"){
                    alert("Devolução realizada com sucesso!")
                }
                return 
                } catch (error) {
                console.error('Erro na criação:', error);
                return 'Erro na criação'
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
                    <p>Tipo de operação: {result.type === "RESERVE"? "Reserva" : 'Empréstimo'}</p>
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
                                blocked? 
                                    <p className="text-red-500">Essa reserva já venceu, não pode ser retirada</p>
                                :
                                    <p>Reserva não retirada</p>
                            :
                                blocked?
                                    <p className="text-red-500">A devolução está atrasada</p>
                                :
                                    <p>Devolução em aberto</p>
                    }
                    <div className='flex flex-row space-x-8 justify-end mt-4'>
                        {
                            result.type === "RESERVE"?
                                result.finalDate?
                                    <button className='btn' onClick={handleUpdateOperation} disabled>Confirmar empréstimo</button>
                                :
                                    blocked?
                                        <button className='btn' onClick={handleUpdateOperation} disabled>Confirmar empréstimo</button>
                                    :
                                        <button className='btn' onClick={handleUpdateOperation} >Confirmar empréstimo</button>
                            :
                                result.finalDate?
                                    <button className='btn' onClick={handleUpdateOperation} disabled>Confirmar devolução</button>
                                :
                                    blocked?
                                        <button className='btn text-red-500' onClick={handleUpdateOperation} >Confirmar devolução</button>
                                    :
                                        <button className='btn' onClick={handleUpdateOperation} >Confirmar devolução</button>

                        }
                    </div>
                </div>
                :
                <Loading/> 
            }
        </>
    )
}