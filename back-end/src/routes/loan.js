import {Router} from 'express'
import loan from '../controllers/loan.js'

const router = Router()

router.post('/',loan.create)
router.get('/',loan.retrieveAll)
router.get('/:name',loan.retrieveOneName)
router.get('/:id_loan',loan.retrieveOneId)
router.put('/:id_loan', loan.update)
router.delete('/', loan.delete)

export default router