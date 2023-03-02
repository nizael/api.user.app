import { Router } from 'express'
import { Request, Response } from 'express';

export const sessionRouters = Router()
sessionRouters.post('/create', sessionController.create)
sessionRouters.post('/auth', auth, (req: Request, res: Response) => {
    return res.json({ auth: 'isAuthenticated' })
})