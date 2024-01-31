import { describe, test, expect, vitest } from "vitest"
import { FindItemByNameAdapter } from "./find-item-by-name-adapter"

interface SutTypes {
  sut: FindItemByNameAdapter
}

const makeSut = (): SutTypes => {
  const sut = new FindItemByNameAdapter()
  return {
    sut
  }
}

describe("FindItemByNameAdapter", () => {
  test("should return true is find item", async () => {
    const { sut } = makeSut()
    const name = "valid_name"    
    vitest.spyOn(sut, 'handle').mockReturnValueOnce(Promise.resolve(true))
    const findItemByName = await sut.handle(name)
    expect(findItemByName).toBe(true)
  })

  test("should return false is empty", async () => {
    const { sut } = makeSut()
    const name = "invalid_name"
    const findItemByName = await sut.handle(name)
    expect(findItemByName).toBe(false)
  })
})
