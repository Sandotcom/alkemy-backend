import { Router } from 'express'
import authRoutes from './auth.js'
import charactersRoutes from './characters.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/characters', charactersRoutes)

export default router