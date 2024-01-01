import { FindAllItemsInInventoryOutPutDto } from "../../core/dto/find-all-items-dto"
import { FindAllItemsInInventory } from "../../core/repositories/inventory-repository"
import { NotFoundError } from "../errors/not-found-item-error";
import { makePrismaClient } from "../factories/prisma";

export class FindAllItemsInInventoryAdapter implements FindAllItemsInInventory {
  async find(): Promise<FindAllItemsInInventoryOutPutDto[]> {
    const prisma = makePrismaClient()
    const returnAllItemsInInventory = await prisma.inventory.findMany()

    if (!returnAllItemsInInventory) throw new NotFoundError("Não existem items cadastrados no inventário")

    const result: FindAllItemsInInventoryOutPutDto[] = returnAllItemsInInventory.map((item) => ({
      id: item.id,
      amount: item.amount,
      comments: item.comments,
      location: item.location,
      name: item.name,
      owner: item.owner,
      serialNumber: item.serial_number,
      technicalSpecifications: item.technical_specifications
    }))
    return result
  }
}