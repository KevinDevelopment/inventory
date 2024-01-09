import { describe, test, expect, vitest } from "vitest"
import { FindItemByIdUseCase } from "./find-item-by-id"
import { FindItemById } from "../../repositories/inventory-repository"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../../dto/find-item-by-id-dto"

interface SutTypes {
  sut: FindItemByIdUseCase,
  findItemByIdStub: FindItemById
}

const makeFindItemByIdStub = (): FindItemById => {
  class FindItemByIdStub implements FindItemById {
   async findById(id: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
      const idExists =  {
        id: "valid_id",
        amount: 78,
        comments: "valid_comments",
        location: "valid_location",
        name: "valid_name",
        owner: "valid_owner",
        serialNumber: "valid_serial_number",
        technicalSpecifications: "valid_specifications"
      }
      return Promise.resolve(idExists)
    }
  }
  return new FindItemByIdStub()
}

const makeSut = (): SutTypes => {
  const findItemByIdStub = makeFindItemByIdStub()
  const sut = new FindItemByIdUseCase(findItemByIdStub)
  return {
    sut,
    findItemByIdStub
  }
}

describe("FindItemByIdUseCase", () => {
  test("Should return an item when id exists", async () => {
    const { sut } = makeSut()
    const idExists =  {
      id: "valid_id",
      amount: 78,
      comments: "valid_comments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
      technicalSpecifications: "valid_specifications"
    }
    vitest.spyOn(sut, 'perform').mockReturnValueOnce(Promise.resolve(idExists))
    const findItemById = await sut.perform(idExists)
    expect(findItemById).toBe(idExists)
  })
})
