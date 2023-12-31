import { InsertItemController } from "../controllers/insert-item-controller"
import { FindAllItemsInInventoryController } from "../controllers/find-all-items-in-inventory-controller"
import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../ports/http"

export const adaptInsertItemController = (controller: InsertItemController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const HttpResponse = await controller.handle(httpRequest)
    res.status(HttpResponse.status).json(HttpResponse.body)
  }
}

export const adapterFindAllItemsController = (controller: FindAllItemsInInventoryController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle()
    res.status(httpResponse.status).json({ messsage: httpResponse.message, status: httpResponse.status, data: httpResponse.body })
  }
}

