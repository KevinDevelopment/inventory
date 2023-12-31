import { FindItemById } from "../repositories/inventory-repository"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../dto/find-item-by-id-dto"
import { NotFoundError } from "./errors/not-found-item-error"

export class FindItemByIdUseCase {
  private readonly findItemByid: FindItemById

  constructor(findItemById: FindItemById) {
    this.findItemByid = findItemById
  }

  async perform(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
    const itemId: FindItemByIdInputDto = {
      id: input.id
    }
    const itemInInventory = await this.findItemByid.findById(itemId)

    if (itemInInventory === null) {
      throw new NotFoundError()
    }

    return {
      id: itemInInventory.id,
      amount: itemInInventory.amount,
      comments: itemInInventory.comments,
      location: itemInInventory.location,
      name: itemInInventory.name,
      owner: itemInInventory.owner,
      serialNumber: itemInInventory.serialNumber,
      technicalSpecifications: itemInInventory.technicalSpecifications
    }
  }
}