import { Inventory } from "../../core/domain/entities/inventory/inventory"
import { InsertItemInInventory } from "../../core/repositories/inventory-repository"
import { makePrismaClient } from "../factories/prisma"
import { v4 as uuidv4 } from "uuid"

export class MySqlAdapter implements InsertItemInInventory {
  async add(inventory: Inventory): Promise<void> {
    const prisma = makePrismaClient()
    const insertItemInInventory = await prisma.inventory.create({
      data: {
        id: uuidv4(),
        name: inventory.name.value,
        amount: inventory.amount.value,
        comments: inventory.comments.value,
        location: inventory.location.value,
        owner: inventory.owner.value,
        serial_number: inventory.serialNumber.value,
        technical_specifications: inventory.technicalSpecifications.value
      }
    }
    )
  }
}