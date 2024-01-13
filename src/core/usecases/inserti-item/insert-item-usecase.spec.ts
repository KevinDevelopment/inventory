import { describe, test, expect } from "vitest"
import { InsertItemUseCase } from "./insert-item.usecase"
import { InsertItemInInventory } from "../../repositories/inventory-repository"
import { Inventory } from "../../domain/entities/inventory/inventory"
import { FindItemByName } from "../../repositories/inventory-repository"

interface SutTypes {
  sut: InsertItemUseCase,
  insertItemInInventoryStub: InsertItemInInventory,
  findItemByNameStub: FindItemByName
}

const makeInsertItemInInventory = (): InsertItemInInventory => {
  class insertItemInInventoryStub implements InsertItemInInventory {
    async add(inventory: Inventory): Promise<void> {
      Promise.resolve(true)
    }
  }
  return new insertItemInInventoryStub()
}

const makeFindItemByName = (): FindItemByName => {
  class findItemByNameStub implements FindItemByName {
    async findByName(name: string): Promise<boolean> {
      return false
    }
  }
  return new findItemByNameStub()
}

const makeSut = (): SutTypes => {
  const insertItemInInventoryStub = makeInsertItemInInventory()
  const findItemByNameStub = makeFindItemByName()
  const sut = new InsertItemUseCase(insertItemInInventoryStub, findItemByNameStub)
  return {
    sut,
    insertItemInInventoryStub,
    findItemByNameStub
  }
}

describe("InsertItemInUseCase", () => {
  test("test", async () => {
    const { sut } = makeSut()
    const itemInInventory = {            
      amount: 89,
      comments: "valid_coments",        
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_Number",
      technicalSpecifications: "valid_specifications"
    }
    const sucess = await sut.perform(itemInInventory)
    const response = {
      message: "item cadastrado no inventário",
      status: 200
    }
    expect(sucess).toStrictEqual(response)
  })
})