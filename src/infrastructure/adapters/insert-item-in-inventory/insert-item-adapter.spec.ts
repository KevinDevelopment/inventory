import { describe, test, expect, vitest } from "vitest"
import { MySqlAdapter } from "./insert-item-adapter"
import { Name, Amount, SerialNumber, TechnicalSpecifications, Owner, Comments, Location } from "../../../core/domain/value-objects"
import { Inventory } from "../../../core/domain/entities/inventory/inventory"

interface SutTypes {
  sut: MySqlAdapter
}

const makeSut = (): SutTypes => {
  const sut = new MySqlAdapter()
  return {
    sut
  }
}

describe("MySqlAdapter", () => {
  test("Should return an item if insert is sucessfully", async () => {
    const { sut } = makeSut()
    const inventory = new Inventory(
      new Name("input.name"),
      new Amount(400),
      new SerialNumber("input.name"),
      new TechnicalSpecifications("input.name"),
      new Owner("input.name"),
      new Location("input.name"),
      new Comments("input.name")
    )
    vitest.spyOn(sut, 'handle').mockReturnValueOnce(Promise.resolve())
    const insertItem = await sut.handle(inventory)
    expect(insertItem).toBe(undefined)
  })
})