import { FindItemById } from "../../repositories/inventory-repository"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../../dto/find-item-by-id-dto"
import { InvalidAction } from "../../domain/errors"

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

    if (!itemInInventory) throw new InvalidAction("Não existe nenhum item com esse id no inventário")

    return {
      id: itemInInventory.id,
      amount: itemInInventory.amount,
      comments: itemInInventory.comments,
      location: itemInInventory.location,
      name: itemInInventory.name,
      owner: itemInInventory.owner,
      serialNumber: itemInInventory.serialNumber,
      technicalSpecifications: itemInInventory.technicalSpecifications
    };
  }
}
