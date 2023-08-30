//import prisma from '../database/<nome>.js'

const book = []

//Mostrar livros disponíveis
book.getAvailableBooks = async function(req, res){
    try{
        const result = await prisma.book.findMany({
            where: { status: 'available',
            orderBy: [
                {title_book: 'asc'}
            ] }
        })
        res.send(result)
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

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

book.retrieveOneAuthor = async function(req, res){
    try{
        const result = await prisma.book.findUnique({
            where: {author_book: req.params.author_book}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

book.retrieveOneCode = async function(req, res){
    try{
        const result = await prisma.book.findUnique({
            where: {code_book: req.params.code_book}
        })
        if(result) res.send(result)
        else res.status(404).end()
    }
    catch(error){
        console.error(error)
        res.status(500).send(error)
    }
}

book.update = async function(code_book) {
    try {
        const result = await prisma.book.update({
            where: { code_book: code_book },
            data: { status: 'reserved' }
        })
        if(result) res.status(204).end()
        else res.status(404).end()
    } 
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export default book
