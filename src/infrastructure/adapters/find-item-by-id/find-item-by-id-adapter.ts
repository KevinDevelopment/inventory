import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../../../core/dto/find-item-by-id-dto"
import { FindItemById } from "../../../core/repositories/inventory-repository"
import { makePrismaClient } from "../../factories/prisma"

export class FindItemByIdAdapter implements FindItemById {
  async findById(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
    const itemId = {
      id: input.id
    }
    const prisma = makePrismaClient()
    const findItemById = await prisma.inventory.findUnique({
      where: {
        id: itemId.id
      }
    })

    return {
      id: findItemById!.id,
      amount: findItemById!.amount,
      comments: findItemById!.comments,
      location: findItemById!.location,
      name: findItemById!.name,
      owner: findItemById!.owner,
      serialNumber: findItemById!.serial_number,
      technicalSpecifications: findItemById!.technical_specifications
    }
  }
}
