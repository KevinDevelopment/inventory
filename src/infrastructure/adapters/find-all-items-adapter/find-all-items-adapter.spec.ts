import { describe, test, expect } from "vitest"
import { FindAllItemsInInventoryAdapter } from "./find-all-items-adapter"

interface SutTypes {
  sut: FindAllItemsInInventoryAdapter
}

const makeSut = (): SutTypes => {
  const sut = new FindAllItemsInInventoryAdapter()
  return {
    sut
  }
}

describe("FindAllItemsInInventoryAdapter", () => {
  test("should return an array of items", async () => {
    const { sut } = makeSut()
    const findAll = await sut.handle()
    expect(Array.isArray(findAll)).toBe(true)    
  })
})


