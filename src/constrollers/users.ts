import { Request, Response } from "express"

export default {
  async createOne(req: Request, res: Response) {
    const response = await userServices.createOne(req.body)
    return res.json(response)
  },

  async getOne(req: Request, res: Response) {
    const response =  await userServices.getOne(req.userId)
    return res.json(response)
  }
}