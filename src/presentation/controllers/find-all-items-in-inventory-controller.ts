import { FindAllItemsUseCase } from "../../core/usecases/find-all-items-usecase/find-all-items-usecase"
import { FindAllItemsInInventoryAdapter } from "../../infrastructure/adapters/find-all-items-adapter"
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
        message: "items no inventario retoranados com sucesso",
        status: 200,
        body: result
      }
    } catch (error) {
      throw new Error("Erro ao buscar items no inventario")
    }
  }
}