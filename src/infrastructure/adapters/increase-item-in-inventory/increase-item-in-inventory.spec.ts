import { describe, test, expect, vitest } from "vitest"
import { IncreaseItemInInventoryAdapter } from "./increase-item-in-inventory-adapter"

interface SutType {
  sut: IncreaseItemInInventoryAdapter
}

const makeSut = (): SutType => {
  const sut = new IncreaseItemInInventoryAdapter()
  return {
    sut
  }
}

describe("IncreaseItemInInventoryAdapter", () => {
  test("should return an inventory if update sucessfully", async () => {
    const { sut } = makeSut()
    const incrementNumber = {
      id: "ijijijj", 
      amount: 300
    }
    const objectExists = {
      amount: 300,
      comments: "valid_comments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
      technicalSpecifications: "valid_specifications"
    }
    vitest.spyOn(sut, 'handle').mockReturnValueOnce(Promise.resolve(objectExists))
    const incrementInInventory =  await sut.handle(incrementNumber)
    expect(incrementInInventory.amount).toBe(300)
  })
})