import { describe, test, expect, vitest } from "vitest"
import { FindItemByIdAdapter } from "./find-item-by-id-adapter"


interface SutTypes {
  sut: FindItemByIdAdapter;
}

const makeSut = (): SutTypes => {
  const sut = new FindItemByIdAdapter();
  return {
    sut,
  };
};

describe("FindItemByIdAdapter", () => {
  test("should throw NotFoundError for invalid ID", async () => {
    const { sut } = makeSut();
    const inputDto = {
      id: "ig9f8gfg8f9g8fg9fg8"
    }
    expect(() => sut.handle(inputDto)).rejects.toThrow()
  })

  test("should return a value if ID is valid", async () => {
    const { sut } = makeSut();
    const inputDto = {
      id: "valid_id"
    }
    const returnValues = {
      id: "valid_id",
      amount: 78,
      comments: "valid_comments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
      technicalSpecifications: "valid_specifications"
    }    
    const mockData = vitest.spyOn(sut, 'handle').mockReturnValueOnce(Promise.resolve(returnValues))  
    const result = await sut.handle(inputDto) 
    expect(mockData).toHaveBeenCalled() 
    expect(result).toEqual(returnValues);
  })
})
