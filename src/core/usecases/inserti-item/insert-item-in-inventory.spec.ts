import { describe, test, expect } from "vitest"
import { InsertItemInInventory } from "../../repositories/inventory-repository"
import { FindItemByName } from "../../repositories/inventory-repository"
import { InsertItemUseCase } from "./insert-item.usecase"
import { Inventory } from "../../domain/entities/inventory/inventory"
import { InvalidAction } from "../../domain/errors"

describe("InsertItemInInventoryUseCase", () => {
  test("Should return status 200 and an message if insert in inventory succesfully", async () => {
    class FindItemInInventoryByName implements FindItemByName {
      async findByName(name: string): Promise<boolean> {
        const allItemsInventory = [
          {
            id: "valid_id",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name_one",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          },
          {
            id: "valid_id_two",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name_two",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          }
        ]

        const findByName = allItemsInventory.find((item) => item.name === name)
        if (findByName) return true
        return false
      }
    }

    class InsertItemInInventoryFake implements InsertItemInInventory {
      async add(inventory: Inventory): Promise<void> {
        const inserItem = {
          technicalSpecifications: inventory.technicalSpecifications,
          amount: inventory.amount,
          comments: inventory.comments,
          location: inventory.location,
          name: inventory.name,
          owner: inventory.owner,
          serialNumber: inventory.serialNumber,
        }
      }
    }

    const inputFindByName = new FindItemInInventoryByName()
    const inputInsert = new InsertItemInInventoryFake
    const insertItem = new InsertItemUseCase(inputInsert, inputFindByName)
    const inputItem = {
      technicalSpecifications: "valid_especifications",
      amount: 500,
      comments: "valid_coments",
      location: "valid_location",
      name: "valid_name",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
    }
    const output = await insertItem.perform(inputItem)
    expect(output).toStrictEqual({
      message: "item cadastrado no inventário",
      status: 200
    })
  })

  test("Should return an error if item exists in inventory", async () => {
    class FindItemInInventoryByName implements FindItemByName {
      async findByName(name: string): Promise<boolean> {
        const allItemsInventory = [
          {
            id: "valid_id",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name_one",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          },
          {
            id: "valid_id_two",
            technicalSpecifications: "valid_especifications",
            amount: 300,
            comments: "valid_coments",
            location: "valid_location",
            name: "valid_name_two",
            owner: "valid_owner",
            serialNumber: "valid_serial_number",
          }
        ]

        const findByName = allItemsInventory.find((item) => item.name === name)
        if (findByName) return true
        return false
      }
    }

    class InsertItemInInventoryFake implements InsertItemInInventory {
      async add(inventory: Inventory): Promise<void> {
        const inserItem = {
          technicalSpecifications: inventory.technicalSpecifications,
          amount: inventory.amount,
          comments: inventory.comments,
          location: inventory.location,
          name: inventory.name,
          owner: inventory.owner,
          serialNumber: inventory.serialNumber,
        }
      }
    }

    const inputFindByName = new FindItemInInventoryByName()
    const inputInsert = new InsertItemInInventoryFake
    const insertItem = new InsertItemUseCase(inputInsert, inputFindByName)
    const inputItem = {
      technicalSpecifications: "valid_especifications",
      amount: 500,
      comments: "valid_coments",
      location: "valid_location",
      name: "valid_name_one",
      owner: "valid_owner",
      serialNumber: "valid_serial_number",
    }    
    await expect(() => insertItem.perform(inputItem)).rejects.toThrowError(new InvalidAction("O item ja existe no inventário"))
  })
})