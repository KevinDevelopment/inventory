import { describe, test, expect } from "vitest"
import { IncreaseItemInInventoryUseCase } from "./increment-item-usecase"
import { IncrementItemInInventory } from "../../repositories/inventory-repository"
import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../../dto/increment-item-dto"

interface SutTypes {
  sut: IncreaseItemInInventoryUseCase,
  incrementInInventoryStub: IncrementItemInInventory
}

const makeIncrementItemInInventoryStub = (): IncrementItemInInventory => {
  class IncrementInInventoryStub implements IncrementItemInInventory {
    async increment(item: IncreaseItemInputDto): Promise<IncreaseItemOutputDto> {
      const itemInInventory = {            
        amount: 89,
        comments: "valid_coments",        
        location: "valid_location",
        name: "valid_name",
        owner: "valid_owner",
        serialNumber: "valid_serial_Number",
        technicalSpecifications: "valid_specifications"
      }
     return Promise.resolve(itemInInventory)
    }    
  }
  return new IncrementInInventoryStub()
}

const makeSut = (): SutTypes => {
  const incrementInInventoryStub = makeIncrementItemInInventoryStub()
  const sut = new IncreaseItemInInventoryUseCase(incrementInInventoryStub)
  return {
    sut,
    incrementInInventoryStub
  }
}

describe("increment item use case", () => {
  test("test", async () => {
    const { sut } = makeSut()
    const itemInInventory = {   
      id: "valid_id",         
      amount: 89,
      comments: "valid_coments",        
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_Number",
      technicalSpecifications: "valid_specifications"
    }
    const incrementItem = await sut.perform(itemInInventory)
    expect(incrementItem).toEqual({
      amount: 89,
      comments: "valid_coments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_Number",
      technicalSpecifications: "valid_specifications",
    });
  })
})