//import prisma from '../database/<nome>.js'

const book = []

book.retrieveAll = async function(req, res){
    try{
        const result = await prisma.book.findMany({
            orderBy: [
                {title_book: 'asc'}
            ]
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

book.retrieveOneTitle = async function(req, res){
    try{
        const result = await prisma.book.findUnique({
            where: {title_book: req.params.title_book} 
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

book.retrieveOneAutor = async function(req, res){
    try{
        const result = await prisma.book.findUnique({
            where: {autor_book: req.params.autor_book}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

book.retrieveOneCod = async function(req, res){
    try{
        const result = await prisma.book.findUnique({
            where: {cod_book: req.params.cod_book}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

export default book
