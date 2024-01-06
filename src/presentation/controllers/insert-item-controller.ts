import { HttpRequest, HttpResponse } from "../ports/http"
import { InsertItemUseCase } from "../../core/usecases/insert-item.usecase"
import { MySqlAdapter } from "../../infrastructure/adapters/insert-item-in-inventory/insert-item-adapter"
import { FindItemByNameAdapter } from "../../infrastructure/adapters/find-item-by-name/find-item-by-name-adapter"

export class InsertItemController {
  private insertItemInUseCase: InsertItemUseCase  

  constructor(insertItem = new MySqlAdapter(), findItemByName = new FindItemByNameAdapter()) {
    this.insertItemInUseCase = new InsertItemUseCase(insertItem, findItemByName)
  }

  async handler(HttpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const inputDto = {        
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
      console.error(error)
      if (error instanceof Error) {
        return {
          message: error.message,
          status: 403,
          body: []
        }
      }

      return {
        message: "Erro interno do servidor",
        status: 500,
        body: []
      }
    }    
  }
}