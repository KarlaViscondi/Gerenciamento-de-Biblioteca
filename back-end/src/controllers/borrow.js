import prisma from '../database/client.js'

const borrow = {}

borrow.create = async function(req, res){
    const date = new Date()
    date.setDate(date.getDate() + 14); 
    try{
        await prisma.operation.create({
            data: {
                ...req.body,
                type: "BORROW",
                expectedDate: date,
            }
        })
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

borrow.retrieveAll = async function(req, res){
    try{
        const result = await prisma.operation.findMany({
            where: {type: "BORROW"},
            // orderBy: [
            //     // {student: 'asc'},
            //     // {date_borrow: 'asc'} 
            //     // data sera que tbm é assim?  
            // ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

// BUSCAR NOME DO ALUNO ANTES

borrow.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.borrow.findUnique({
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

//A PARTIR DAQUI REVER - TEREMOS ID??

borrow.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.borrow.findUnique({
            where: {id_borrow: req.params.id_borrow}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

borrow.update = async function(req, res){
    try{
        const result = await prisma.borrow.update({
            where: {id_borrow: Number(req.params.id_borrow)},
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

borrow.delete = async function(req, res){
    try{
        const result = await prisma.borrow.delete({
            where: {id_borrow: Number(req.params.id_borrow)}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default borrow