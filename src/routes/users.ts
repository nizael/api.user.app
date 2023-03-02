import { Router } from 'express'
import userController from '../constrollers/users'
export const userRouters = Router()
userRouters.post('/create-one', userController.createOne)
userRouters.get('/get-one', auth, userController.getOne)
