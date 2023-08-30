import prisma from './prisma';
import book from './book.js';
import { Eligible } from './eligible';

const reservation = {}

reservation.create = async function(req, res) {
    try {
        const reservationData = req.body;
        // Verificar se o aluno está apto para reservar
        if (!(await Eligible(reservationData.cpf))) {
            return res.status(400).send("O aluno não está apto para fazer a reserva.");
        }
        reservationData.status = 'reserve'; // Status 
        await prisma.reservation.create({ data: reservationData });
        // Atualizar status do livro para reservado
        await book.update(reservationData.code_book);
        res.status(201).end();
    } 
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

reservation.retrieveAll = async function(req, res){
    try{
        const result = await prisma.reservation.findMany({
            orderBy: [
                {name_student: 'asc'},
                {date_reservation: 'asc'} // data sera que tbm é assim?  
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.reservation.findUnique({
            where: {name_student: req.params.name_student} 
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.retrieveOneCPF = async function(req, res){
    try{
        const result = await prisma.reservation.findUnique({
            where: {cpf: req.params.cpf} 
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.reservation.findUnique({
            where: {id_reservation: req.params.id_reservation}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.retrieveOneBook = async function(req, res){
    try{
        const result = await prisma.reservation.findUnique({
            where: {title: req.params.title}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.update = async function(req, res){
    try{
        const result = await prisma.reservation.update({
            where: {id_reservation: Number(req.params.id_reservation)},
            data: req.body
        })
        if(result) res.status(204).end()
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reservation.delete = async function(req, res){
    try{
        const result = await prisma.reservation.delete({
            where: {id_reservation: Number(req.params.id_reservation)}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default reservation