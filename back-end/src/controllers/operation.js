import prisma from '../database/client.js'

const operation = {}

operation.create = async function(req, res){

    // Verificar se o aluno está apto para reservar
    // if (!(await Eligible(reserveData.cpf))) {
    // }
    // return res.status(400).send("O aluno não está apto para fazer a reserva.");

    const date = new Date()
    try{
        await prisma.operation.create({
            data: {
                ...req.body,
                expectedDate:  (req.body.type === "BORROW")
                ? new Date(date.getDate() + 14 * 24 * 60 * 60 * 1000) // Adiciona 14 dias
                : new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000) // Adiciona 1 dia
            }
        })
        res.status(201).end()
    }

    // Atualizar status do livro para reservado
    // await book.update(reserveData.code_book);
    // res.status(201).end();
    // Faz isso aqui ou o front chama?? 

    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

operation.retrieveAll = async function(req, res){
    try{
        const result = await prisma.operation.findMany({
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

// FUNCIONA PORÉM COMPORTAMENTO ESTRANHO -> como é find many o students.cpf tá vindo null
// pois é um array de objeto
// precisa ou o front coleta o cpf???

// operation.retrieveOneName = async function(req, res){
//     try{
//         const students = await prisma.user.findMany({
//             where: {name: req.params.name} 
//         })
//         console.log(students.cpf)
//         const result = await prisma.operation.findMany({
//             where: {studentCPF: students.cpf}
//         })

//         if(result) res.send(result)
//         else res.status(404).end()
//     }
//     catch(error){
//         console.error(error)
//         res.status(500).send(error)
//     }
// }

operation.retrieveByCPF = async function(req, res){
    try{
        const result = await prisma.operation.findMany({
            where: {studentCPF: req.params.cpf}
        })

        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

operation.retrieveByBookCode = async function(req, res){
    try{
        const book = await prisma.book.findUnique({
            where: {code: req.params.code} 
        })

        const result = await prisma.operation.findMany({
            where: {bookCode: book.code}
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

operation.retrieveOneId = async function(req, res){
    try{
        const result = await prisma.operation.findUnique({
            where: {id: req.params.id}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

operation.retrieveByType = async function(req, res){
    try{
        const result = await prisma.operation.findMany({
            where: {type: req.params.type}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

operation.update = async function(req, res){
    try{
        const result = await prisma.operation.update({
            where: {id: req.params.id},
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

operation.delete = async function(req, res){
    try{
        const result = await prisma.operation.delete({
            where: {id: req.params.id}
        })
        if(result) res.status(204).end()
        else res.status(500).send(error)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default operation