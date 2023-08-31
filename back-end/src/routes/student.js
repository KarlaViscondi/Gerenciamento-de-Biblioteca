import {Router} from 'express'
import student from '../controllers/student.js'

const router = Router()

router.get('/',student.retrieveAll)
router.get('/name/:name',student.retrieveOneName)
router.get('/cpf/:cpf',student.retrieveOneCPF)
router.get('/code/:code',student.retrieveOneCode)

export default router