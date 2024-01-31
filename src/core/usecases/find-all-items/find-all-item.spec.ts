import { describe, test, expect } from "vitest"
import { FindAllItemsUseCase } from "./find-all-items-usecase"
import { FindAllItemsInInventory } from "../../repositories/inventory-repository"
import { FindAllItemsInInventoryOutPutDto } from "../../dto/find-all-items-dto"
import { InvalidAction } from "../../domain/errors"

describe("FindAllItemsUseCase", () => {
  test("Should return all items in inventory", async () => {
    class FindAllItemsInventoryAdapterFake implements FindAllItemsInInventory {
      async handle(): Promise<FindAllItemsInInventoryOutPutDto[]> {
        return [
          {
            id: "valid_id",
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
      }
    }

    const input = new FindAllItemsInventoryAdapterFake()
    const findAllItems = new FindAllItemsUseCase(input)
    const output = await findAllItems.perform()
    expect(output).toStrictEqual([
      {
        id: "valid_id",
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
    ])
  })

  test("Should return an exception if items in inventory empty", async () => {
    class FindAllItemsInventoryAdapterFake implements FindAllItemsInInventory {
      async handle(): Promise<FindAllItemsInInventoryOutPutDto[]> {
        return []
      }
    }

    const input = new FindAllItemsInventoryAdapterFake()
    const findAllItems = new FindAllItemsUseCase(input)
    await expect(() => findAllItems.perform()).rejects.toThrowError(new InvalidAction("Ainda não existem items cadastrados no inventário"))
  })
})