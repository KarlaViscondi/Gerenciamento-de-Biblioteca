//import prisma from '../database/<nome>.js'

const refund = {}

refund.create = async function(req, res){
    try{
        await prisma.refund.create({data: req.body})
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

refund.retrieveAll = async function(req, res){
    try{
        const result = await prisma.refund.findMany({
            orderBy: [
                {name_student: 'asc'},
                {date_refund: 'asc'} // data sera que tbm é assim?  
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

refund.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.refund.findUnique({
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

refund.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.refund.findUnique({
            where: {id_refund: req.params.id_refund}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

refund.update = async function(req, res){
    try{
        const result = await prisma.refund.update({
            where: {id_refund: Number(req.params.id_refund)},
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

refund.delete = async function(req, res){
    try{
        const result = await prisma.refund.delete({
            where: {id_refund: Number(req.params.id_refund)}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default refund