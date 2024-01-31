import { IncrementItemInInventory } from "../../repositories/inventory-repository"
import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../../dto/increment-item-dto"

export class IncreaseItemInInventoryUseCase { 
  private incrementItem: IncrementItemInInventory

  constructor(incrementItem: IncrementItemInInventory) {
    this.incrementItem = incrementItem
  }

  async perform(input: IncreaseItemInputDto): Promise<IncreaseItemOutputDto> {
    const item = {
      id: input.id,
      amount: input.amount
    }
    const increaseItem = await this.incrementItem.handle(item)

    return {
      amount: increaseItem.amount,
      comments: increaseItem.comments,
      location: increaseItem.location,
      name: increaseItem.name,
      owner: increaseItem.owner,
      serialNumber: increaseItem.serialNumber,
      technicalSpecifications: increaseItem.technicalSpecifications
    }
  }
}