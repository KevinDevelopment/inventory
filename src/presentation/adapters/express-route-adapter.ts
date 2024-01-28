import { InsertItemController } from "../controllers/insert-item-controller"
import { FindAllItemsInInventoryController } from "../controllers/find-all-items/find-all-items-in-inventory-controller"
import { IncrementItemInInventoryController } from "../controllers/increment-item-in-inventory-controller"
import { FindItemByIdController } from "../controllers/find-item-by-id-controller"
import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../ports/http"

export const adaptInsertItemController = (controller: InsertItemController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const HttpResponse = await controller.handler(httpRequest)
    res.status(HttpResponse.status).json(HttpResponse.body)
  }
}

export const adapterFindAllItemsController = (controller: FindAllItemsInInventoryController) => {
  return async (req: Request, res: Response) => {
    const httpResponse: HttpResponse = await controller.handle()
    res.status(httpResponse.status).json({ message: httpResponse.message, status: httpResponse.status, data: httpResponse.body })
  }
}

export const adapterFindItemByIdController = (controller: FindItemByIdController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.params
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.status).json({ message: httpResponse.message, status: httpResponse.status, data: httpResponse.body })
  }
}

export const adapterIncrementItemInInventoryController = (controller: IncrementItemInInventoryController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse: HttpResponse = await controller.handler(httpRequest)
    res.status(httpResponse.status).json({ message: httpResponse.message, status: httpResponse.status, data: httpResponse.body })
  }
}

