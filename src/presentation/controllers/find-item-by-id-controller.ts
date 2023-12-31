import { FindItemByIdUseCase } from "../../core/usecases/find-item-by-id"
import { FindItemByIdAdapter } from "../../infrastructure/adapters/find-item-by-id-adapter"
import { HttpRequest, HttpResponse } from "../ports/http"

export class FindItemByIdController {
  private readonly findItemById: FindItemByIdUseCase

  constructor(findItemByIdAdapter = new FindItemByIdAdapter()) {
    this.findItemById = new FindItemByIdUseCase(findItemByIdAdapter)
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const input = {
        id: httpRequest.body.id
      }
      const itemById = await this.findItemById.perform(input)
      return {
        message: "Item retornado com sucesso",
        status: 200,
        body: itemById
      }
    } catch (error) {
      throw new Error("houve um erro ao retornar item do inventario");

    }
  }
}