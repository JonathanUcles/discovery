import express from 'express'
import { getHome, postClick } from '../controllers/home'
const router = express.Router()

router.route('/').get(getHome)
router.route('/clicked').post(postClick)

export {router as homeRouter};