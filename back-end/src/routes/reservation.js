import {Router} from 'express'
import reservation from '../controllers/reservation.js'

const router = Router()

router.post('/',reservation.create)
router.get('/',reservation.retrieveAll)
router.get('/:',reservation.retrieveOne) // como referenciar id_load, name_student
router.put('/:id_reservation', reservation.update)

export default router