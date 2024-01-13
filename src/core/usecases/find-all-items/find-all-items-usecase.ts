import { FindAllItemsInInventory } from "../../repositories/inventory-repository"
import { FindAllItemsInInventoryOutPutDto } from "../../dto/find-all-items-dto"
import { InvalidAction } from "../../domain/errors"

export class FindAllItemsUseCase {
  private findAllItemsInInventory: FindAllItemsInInventory

  constructor(findAllItemsInInventory: FindAllItemsInInventory) {
    this.findAllItemsInInventory = findAllItemsInInventory
  }

  async perform(): Promise<FindAllItemsInInventoryOutPutDto[]> {
    const itemsInInventory = await this.findAllItemsInInventory.find()

    if (!itemsInInventory) throw new InvalidAction("Ainda não existem items cadastrados no inventário");

    const result: FindAllItemsInInventoryOutPutDto[] = itemsInInventory.map((item) => ({
      id: item.id,
      technicalSpecifications: item.technicalSpecifications,
      amount: item.amount,
      comments: item.comments,
      location: item.location,
      name: item.name,
      owner: item.owner,
      serialNumber: item.serialNumber,
    }))
    return result
  }
}