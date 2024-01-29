import { IncreaseItemInInventoryUseCase } from "../../../core/usecases/increment-item/increment-item-usecase"
import { IncreaseItemInInventoryAdapter } from "../../../infrastructure/adapters/increase-item-in-inventory/increase-item-in-inventory-adapter"
import { InvalidAction } from "../../../core/domain/errors"
import { HttpResponse, HttpRequest } from "../../ports/http"

export class IncrementItemInInventoryController {
  private incrementInventoryController: IncreaseItemInInventoryUseCase

  constructor(incrementeAdapter = new IncreaseItemInInventoryAdapter()) {
    this.incrementInventoryController = new IncreaseItemInInventoryUseCase(incrementeAdapter)
  }

  async handler(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const input = {
        id: httpRequest.body.id,
        amount: httpRequest.body.amount
      }
      const increment = await this.incrementInventoryController.perform(input)

      return {
        message: "Dados alterados com sucesso",
        status: 200,
        body: increment
      }
    } catch (error) {
      if (error instanceof InvalidAction) {
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