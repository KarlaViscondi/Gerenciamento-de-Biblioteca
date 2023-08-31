import prisma from '../database/client.js';

const student = {}

student.retrieveAll = async function(req, res){
    try{
        const result = await prisma.student.findMany({
            orderBy: [
                {name_student: 'asc'}
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

student.retrieveOneName = async function(req, res){
    try{
        const result = await prisma.student.findUnique({
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

student.retrieveOneCPF = async function(req, res){
    try{
        const result = await prisma.student.findUnique({
            where: {cpf_student: req.params.cpf_student}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

student.retrieveOneRA = async function(req, res){
    try{
        const result = await prisma.student.findUnique({
            where: {ra_student: req.params.ra_student}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default student
