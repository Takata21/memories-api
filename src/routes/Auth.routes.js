import { Router } from 'npm:express'
import { login, profile, register } from '../controllers/auth.controllers.js'
import { verifyToken } from '../helpers/signAccessToken.js'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/profile', verifyToken, profile)

export default router
