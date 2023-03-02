import { Router } from 'express'

export const userRouters = Router()
userRouters.post('/create-one', userController.createOne)
userRouters.get('/get-one', auth, userController.getOne)
