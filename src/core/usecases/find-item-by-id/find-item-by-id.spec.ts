import { describe, test, expect } from "vitest"
import { FindItemByIdUseCase } from "./find-item-by-id"
import { FindItemById } from "../../repositories/inventory-repository"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../../dto/find-item-by-id-dto"
import { InvalidAction } from "../../domain/errors"

describe("FindItemByIdUseCase", () => {
  test("Should return an item in inventory if id exists", async () => {
    class FindItemByIdFake implements FindItemById {
      async findById(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
        const itemInInventory = [
          {
            id: "valid_id_one",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          },
          {
            id: "valid_id_two",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          }
        ]

        const findItem: FindItemByIdOutPutDto = itemInInventory.find((item) => item.id === input.id)!
        return findItem
      }
    }

    const input = new FindItemByIdFake()
    const findById = new FindItemByIdUseCase(input)
    const itemId = {
      id: "valid_id_one"
    }
    const output = await findById.perform(itemId)
    expect(output).toStrictEqual({
      id: "valid_id_one",
      technicalSpecifications: "valid_especifications",
      amount: 300,
      comments: "valid_coments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
    })
  })


  test("Should return an error if item not exists", async () => {
    class FindItemByIdFake implements FindItemById {
      async findById(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto> {
        const itemInInventory = [
          {
            id: "valid_id_one",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          },
          {
            id: "valid_id_two",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          }
        ]

        const findItem: FindItemByIdOutPutDto = itemInInventory.find((item) => item.id === input.id)!
        return findItem
      }
    }

    const input = new FindItemByIdFake()
    const findById = new FindItemByIdUseCase(input)
    const itemId = {
      id: "valid_id_three"
    }
    await expect(() => findById.perform(itemId)).rejects.toThrowError(new InvalidAction("Não existe nenhum item com esse id no inventário"));
  })
})