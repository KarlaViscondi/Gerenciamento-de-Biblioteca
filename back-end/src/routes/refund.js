import {Router} from 'express'
import refund from '../controllers/refund.js'

const router = Router()

router.post('/',refund.create)
router.get('/',refund.retrieveAll)
router.get('/:name',refund.retrieveOneName)
router.get('/:id_refund',refund.retrieveOneId)
router.put('/:id_refund', refund.update)
router.delete('/', refund.delete)

export default router