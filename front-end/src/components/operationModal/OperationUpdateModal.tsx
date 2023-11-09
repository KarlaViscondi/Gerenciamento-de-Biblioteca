import myfetch from "@/src/utils/myfetch";
import { useEffect, useState } from "react";
import Loading from "../Loading";

interface updateModalProps{
    id: string;
}

// FALTA TIPAR E AJEITAR VISUAL E QUAIS CAMPOS VAO MOSTRAR DE FATO 

export default function OperationUpdateModal({id}:updateModalProps){
    const [result, setResult] = useState();
    const [student, setStudent] = useState();
    const [book, setBook] = useState();

    useEffect(()=>{
        getOperationResult() 
    },[])
    useEffect(()=>{
        console.log(result)
    },[result])
    useEffect(()=>{
        console.log(student)
    },[student])
    useEffect(()=>{
        console.log(book)
    },[book])

    async function getOperationResult(){
        try {
            var response = await myfetch.get(`/operation/id/${id}`)
            response = response.shift()
            console.log(response)
            setResult(response)
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
                    <p>Tipo de operação: {result.type}</p>
                    <p>Data da operação: {result.createdAt}</p>
                    <p>Data limite: {result.expectedDate}</p>
                </div>

                :

                <Loading/> 

            
            }
        </>
    )
}