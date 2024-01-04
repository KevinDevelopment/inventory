import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../../core/dto/increment-item-dto";
import { IncrementItemInInventory } from "../../core/repositories/inventory-repository"
import { makePrismaClient } from "../factories/prisma";


export class IncreaseItemInInventoryAdapter implements IncrementItemInInventory {
  async increment(item: IncreaseItemInputDto): Promise<IncreaseItemOutputDto> {
    const prisma = makePrismaClient()

    const incrementItem = await prisma.inventory.update({
      where: {
        id: item.id
      },
      data: {
        amount: item?.amount
      }
    })

    return {
      amount: incrementItem.amount,
      comments: incrementItem.comments,
      location: incrementItem.location,
      name: incrementItem.name,
      owner: incrementItem.owner,
      serialNumber: incrementItem.serial_number,
      technicalSpecifications: incrementItem.technical_specifications
    }
  }
}