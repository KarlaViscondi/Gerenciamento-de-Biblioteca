import prisma from '../database/client.js';
import book from './book.js';
import { Eligible } from './eligible.js';

const reserve = {}

reserve.create = async function(req, res) {
    try {
        const reserveData = req.body;
        // Verificar se o aluno está apto para reservar
        // if (!(await Eligible(reserveData.cpf))) {
        // }
        return res.status(400).send("O aluno não está apto para fazer a reserva.");
        reserveData.status = 'reserve'; // Status 
        await prisma.reserve.create({ data: reserveData });
        // Atualizar status do livro para reservado
        await book.update(reserveData.code_book);
        res.status(201).end();
    } 
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

reserve.retrieveAll = async function(req, res){
    try{
        const result = await prisma.reserve.findMany({
            orderBy: [
                {name_student: 'asc'},
                {date_reserve: 'asc'} // data sera que tbm é assim?  
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reserve.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.reserve.findUnique({
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

reserve.retrieveOneCPF = async function(req, res){
    try{
        const result = await prisma.reserve.findUnique({
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

reserve.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.reserve.findUnique({
            where: {id_reserve: req.params.id_reserve}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

reserve.retrieveOneBook = async function(req, res){
    try{
        const result = await prisma.reserve.findUnique({
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

reserve.update = async function(req, res){
    try{
        const result = await prisma.reserve.update({
            where: {id_reserve: Number(req.params.id_reserve)},
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

reserve.delete = async function(req, res){
    try{
        const result = await prisma.reserve.delete({
            where: {id_reserve: Number(req.params.id_reserve)}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default reserve