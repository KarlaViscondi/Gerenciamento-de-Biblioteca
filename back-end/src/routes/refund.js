import {Router} from 'express'
import refund from '../controllers/refund.js'

const router = Router()

router.post('/',refund.create)
router.get('/',refund.retrieveAll)
router.get('/:',refund.retrieveOne) // como referenciar id_load, name_student
router.put('/:id_refund', refund.update)

export default router