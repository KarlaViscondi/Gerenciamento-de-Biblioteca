import prisma from '../database/client.js';

const user = {}

user.retrieveAll = async function(req, res){
    try{
        const result = await prisma.user.findMany({
            orderBy: [
                {name: 'asc'}
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

user.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.user.findMany({
            where: {name: req.params.name} 
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

user.retrieveOneCPF = async function(req, res){
    try{
        const result = await prisma.user.findUnique({
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

user.retrieveOneCode = async function(req, res){
    try{
        const result = await prisma.user.findUnique({
            where: {code: req.params.code}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default user
