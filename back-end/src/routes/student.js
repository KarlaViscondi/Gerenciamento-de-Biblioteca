import {Router} from 'express'
import student from '../controllers/student.js'

const router = Router()

router.get('/',student.retrieveAll)
router.get('/:name',student.retrieveOneName)
router.get('/:cpf',student.retrieveOneCPF)
router.get('/:ra',student.retrieveOneRa)

export default router