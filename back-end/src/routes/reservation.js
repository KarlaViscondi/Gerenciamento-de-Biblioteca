import {Router} from 'express'
import reservation from '../controllers/reservation.js'

const router = Router()

router.post('/',reservation.create)
router.get('/',reservation.retrieveAll)
router.get('/:name',reservation.retrieveOneName)
router.get('/:id_reservation',reservation.retrieveOneId)
router.put('/:id_reservation', reservation.update)
router.delete('/', reservation.delete)

export default router