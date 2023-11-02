import { useEffect } from "react";

interface updateModalProps{
    id: string;
}

export default function OperationUpdateModal({id}:updateModalProps){
    useEffect(()=>{
        //BUSCAR 
    },[])

    const result = {
        name: "José",
        cpf: "12345678945",
        type: "Reserva",
        date: "03/11/2023",
    }

    return(
        <div className="text-black flex flex-col space-y-2">
            <p>Nome do aluno: {result.name}</p>
            <p>CPF: {result.cpf}</p>
            <p>Tipo de operação: {result.type}</p>
            <p>Data da operação: {result.date}</p>
            <p>Data limite: {result.date}</p>
        </div>
    )
}