import {Router} from 'express'
import book from '../controllers/book.js'

const router = Router()

router.get('/',book.retrieveAll)
router.get('/:title',book.retrieveOneTitle)
router.get('/:autor',book.retrieveOneAutor)
router.get('/:cod_book',book.retrieveOneCod)

export default router