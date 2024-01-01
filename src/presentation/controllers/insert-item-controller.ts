import { HttpRequest, HttpResponse } from "../ports/http"
import { InsertItemUseCase } from "../../core/usecases/insert-item.usecase"
import { MySqlAdapter } from "../../infrastructure/adapters/insert-item-adapter"

export class InsertItemController {
  private insertItemInUseCase: InsertItemUseCase

  constructor(insertItem = new MySqlAdapter()) {
    this.insertItemInUseCase = new InsertItemUseCase(insertItem)
  }

  async handle(HttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const inputDto = {
        id: HttpRequest.body.id,
        name: HttpRequest.body.name,
        amount: HttpRequest.body.amount,
        serialNumber: HttpRequest.body.serial_number,
        technicalSpecifications: HttpRequest.body.technical_specifications,
        owner: HttpRequest.body.owner,
        location: HttpRequest.body.location,
        comments: HttpRequest.body.comments
      }
      const insertItem = await this.insertItemInUseCase.perform(inputDto)
      return {
        message: insertItem.message,
        status: insertItem.status,
        body: insertItem
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          message: error.message,
          status: 403,
          body: []
        }
      }
    }

    return {
      message: "Erro interno do servidor",
      status: 500,
      body: []
    }
  }
}