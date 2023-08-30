import {Router} from 'express'
import book from '../controllers/book.js'

const router = Router()

//router.get('/:status',book.getAvailableBooks) é assim? tem que colocar o status: available
router.get('/',book.retrieveAll)
router.get('/:title',book.retrieveOneTitle)
router.get('/:author',book.retrieveOneAuthor)
router.get('/:code_book',book.retrieveOneCode)
//router.update('/',book.update) coloca o que no '/' ?

export default router