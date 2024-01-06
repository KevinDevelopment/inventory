import { describe, test, expect } from "vitest"
import { FindAllItemsUseCase } from "./find-all-items-usecase"
import { FindAllItemsInInventory } from "../../repositories/inventory-repository"
import { FindAllItemsInInventoryOutPutDto } from "../../dto/find-all-items-dto"

interface SutTypes {
  sut: FindAllItemsUseCase,
  findAllItemsStub: FindAllItemsInInventory
}

const makeFindAllitemsInInventory = (): FindAllItemsInInventory => {
  class FindAllItemsInInventoryStub implements FindAllItemsInInventory {
    async find(): Promise<FindAllItemsInInventoryOutPutDto[]> {
      const returnValues = [
        {
          id: "valid_id",
          amount: 78,
          comments: "valid_comments",
          location: "valid_location",
          name: "valid_name",
          owner: "valid_owner",
          serialNumber: "valid_serial_number",
          technicalSpecifications: "valid_specifications"
        },
        {
          id: "valid_id",
          amount: 78,
          comments: "valid_comments",
          location: "valid_location",
          name: "valid_name",
          owner: "valid_owner",
          serialNumber: "valid_serial_number",
          technicalSpecifications: "valid_specifications"
        }
      ]
      return Promise.resolve(returnValues)
    }
  }
  return new FindAllItemsInInventoryStub()
}

const makeSut = (): SutTypes => {
  const findAllItemsStub = makeFindAllitemsInInventory()
  const sut = new FindAllItemsUseCase(findAllItemsStub)
  return {
    sut,
    findAllItemsStub
  }
}

describe("FindAllItemsInInventory", () => {
  test("teste", async () => {
    const { sut } = makeSut()
    const findAllItems = await sut.perform()
    expect(Array.isArray(findAllItems)).toBe(true)  
    expect(findAllItems.length).toBeGreaterThan(0)
  })
})