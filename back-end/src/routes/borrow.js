import {Router} from 'express'
import borrow from '../controllers/borrow.js'

const router = Router()

router.post('/',borrow.create)
router.get('/',borrow.retrieveAll)
router.get('/:name',borrow.retrieveOneName)
router.get('/:id_borrow',borrow.retrieveOneId)
router.put('/:id_borrow', borrow.update)
router.delete('/', borrow.delete)

export default router