import { Router } from 'express'
import { Request, Response } from 'express';
import sessionController from '../constrollers/sessions'
import { auth } from '../middlewares/auth';
export const sessionRouters = Router()
sessionRouters.post('/create', sessionController.create)
sessionRouters.post('/auth', auth, (req: Request, res: Response) => {
    return res.json({ auth: 'isAuthenticated' })
})