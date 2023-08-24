//import prisma from '../database/<nome>.js'

const loan = {}

loan.create = async function(req, res){
    try{
        await prisma.loan.create({data: req.body})
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

loan.retrieveAll = async function(req, res){
    try{
        const result = await prisma.loan.findMany({
            orderBy: [
                {name_student: 'asc'},
                {date_loan: 'asc'} // data sera que tbm é assim?  
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

loan.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.loan.findUnique({
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

loan.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.loan.findUnique({
            where: {id_loan: req.params.id_loan}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

loan.update = async function(req, res){
    try{
        const result = await prisma.loan.update({
            where: {id_loan: Number(req.params.id_loan)},
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

loan.delete = async function(req, res){
    try{
        const result = await prisma.loan.delete({
            where: {id_loan: Number(req.params.id_loan)}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default loan