import { InsertItemController } from "../controllers/insert-item-controller"
import { Request, Response } from "express"
import { HttpRequest } from "../ports/http"

export const adaptRouter = (controller: InsertItemController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const HttpResponse = await controller.handle(httpRequest)
    res.status(HttpResponse.status).json(HttpResponse.body)
  }
}