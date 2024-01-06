import { FindItemByIdUseCase } from "../../core/usecases/find-item-by-id"
import { FindItemByIdAdapter } from "../../infrastructure/adapters/find-item-by-id/find-item-by-id-adapter"
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