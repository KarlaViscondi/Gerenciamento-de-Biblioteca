//import prisma from '../database/<nome>.js'

const reservation = {}

reservation.create = async function(req, res){
    try{
        await prisma.reservation.create({data: req.body})
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
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