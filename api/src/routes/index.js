import { Router } from 'express'
import authRoutes from './auth.js'
import charactersRoutes from './characters.js'
import moviesRoutes  from './movies.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/characters', charactersRoutes)
router.use('/movies', moviesRoutes)

export default router