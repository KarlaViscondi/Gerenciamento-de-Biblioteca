import {Router} from 'express'
import loan from '../controllers/loan.js'

const router = Router()

router.post('/',loan.create)
router.get('/',loan.retrieveAll)
router.get('/:',loan.retrieveOne) // como referenciar id_load, name_student
router.put('/:id_loan', loan.update)

export default router