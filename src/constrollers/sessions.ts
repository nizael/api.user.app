import { Request, Response } from "express"

export default {
  async create(req: Request, res: Response) {
    const response = await sessionServices.create(req.body)
    return res.json(response)
  }
}