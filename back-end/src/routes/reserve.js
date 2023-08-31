import {Router} from 'express'
import reserve from '../controllers/reserve.js'

const router = Router()

router.post('/',reserve.create)
router.get('/',reserve.retrieveAll)
router.get('/:name',reserve.retrieveOneName)
router.get('/:id_reserve',reserve.retrieveOneId)
router.get('/:title',reserve.retrieveOneBook)
router.get('/:cpf',reserve.retrieveOneCPF)
router.put('/:id_reserve', reserve.update)
router.delete('/', reserve.delete)

export default router