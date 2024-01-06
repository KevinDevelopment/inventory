import { FindItemByName } from "../../../core/repositories/inventory-repository"
import { makePrismaClient } from "../../factories/prisma"

export class FindItemByNameAdapter implements FindItemByName {
  async findByName(name: string): Promise<boolean> {
    const prisma = makePrismaClient()

    const itemExistsInInventory = await prisma.inventory.findFirst({
      where: {
        name: name
      }
    })

    if (itemExistsInInventory) return true
    return false
  }
}