import { describe, test, expect } from "vitest"
import { IncreaseItemInInventoryUseCase } from "./increment-item-usecase"
import { IncrementItemInInventory } from "../../repositories/inventory-repository"
import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../../dto/increment-item-dto"

describe("IncrementItemUseCase", () => {
  test("Should return an item when amount is added", async () => {
    class incrementeItemInInventoryFake implements IncrementItemInInventory {
      async handle(item: IncreaseItemInputDto): Promise<IncreaseItemOutputDto> {
        const itemInInventory = [
          {
            id: item.id,
            technicalSpecifications: "valid_especifications",
            amount: item.amount,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          },
          {
            id: item.id,
            technicalSpecifications: "valid_especifications",
            amount: item.amount,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          }
        ]
        const findItemInInventory = itemInInventory.find((object) => object.id === item.id)!
        return findItemInInventory
      }
    }

    const input = new incrementeItemInInventoryFake()
    const increaseItem = new IncreaseItemInInventoryUseCase(input)
    const itemId = {
      id: "valid_id_one",
      amount: 900
    }
    const output = await increaseItem.perform(itemId)
    expect(output).toStrictEqual(
      {
        technicalSpecifications: "valid_especifications",
        amount: 900,
        comments: "valid_coments",
        location: "valid_location",
        name: "valid_name",
        owner: "valid_owner",
        serialNumber: "valid_serial_number",
      }
    )
  })
})