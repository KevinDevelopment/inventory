import { FindAllItemsUseCase } from "../../core/usecases/find-all-items/find-all-items-usecase"
import { FindAllItemsInInventoryAdapter } from "../../infrastructure/adapters/find-all-items-adapter/find-all-items-adapter"
import { HttpResponse } from "../ports/http"

export class FindAllItemsInInventoryController {
  private readonly findAllItems: FindAllItemsUseCase

  constructor(findAllItemsAdapter = new FindAllItemsInInventoryAdapter()) {
    this.findAllItems = new FindAllItemsUseCase(findAllItemsAdapter)
  }

  async handle(): Promise<HttpResponse> {
    try {
      const result = await this.findAllItems.perform()
      return {
        message: "items no inventario retornados com sucesso",
        status: 200,
        body: result
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          message: error?.message,
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