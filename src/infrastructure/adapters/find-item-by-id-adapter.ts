import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../../core/dto/find-item-by-id-dto"
import { FindItemById } from "../../core/repositories/inventory-repository"
import { PrismaClient } from "@prisma/client"
import { NotFoundError } from "../errors/not-found-item-error"

export class FindItemByIdAdapter implements FindItemById {
  async findById(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
    const prisma = new PrismaClient()
    const itemId = {
      id: input.id
    }
    const findItemById = await prisma.inventory.findUnique({
      where: {
        id: itemId.id
      }
    })
    if (!findItemById) throw new NotFoundError()
    return {
      id: findItemById.id,
      amount: findItemById.amount,
      comments: findItemById.comments,
      location: findItemById.location,
      name: findItemById.name,
      owner: findItemById.owner,
      serialNumber: findItemById.serial_number,
      technicalSpecifications: findItemById.technical_specifications
    }
  }
}
