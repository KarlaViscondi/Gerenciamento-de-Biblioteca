import {Router} from 'express'
import operation from '../controllers/operation.js'

const router = Router()

router.post('/',operation.create)
router.get('/',operation.retrieveAll)
// router.get('/name/:name',operation.retrieveOneName)
router.get('/id/:id',operation.retrieveOneId)
router.get('/book/:code',operation.retrieveByBookCode)
router.get('/type/:type',operation.retrieveByType)
router.get('/student/:cpf',operation.retrieveByCPF)
router.put('/update/:id', operation.update)
router.delete('/', operation.delete)

export default router