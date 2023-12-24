import { describe, expect, test } from "vitest"
import { InsertItemUseCase } from "./insert-item.usecase"
import { Inventory } from "../../domain/entities/inventory/inventory"


interface InventoryMock {
  add(inventory: Inventory): Promise<void>
}

class InventoryMock implements InventoryMock {
  async add(inventory: Inventory): Promise<void> {
    console.log("Item adicionado ao inventário", inventory)
  }
}

class inventoryMockWithError implements InventoryMock {  
  add(inventory: unknown): Promise<void> {
    throw new Error("erro 500 simulado")
  }
}

describe("insert-item.usecase", () => {
  test("should add an item in inventory with successfully", async () => {
    const inventoryMock = new InventoryMock()
    const sut = new InsertItemUseCase(inventoryMock)
    const inputDto = {
      id: "123",
      name: "Item1",
      amount: 1,
      serialNumber: "SN123",
      technicalSpecifications: "Specs",
      owner: "Owner1",
      location: "Location1",
      comments: "Comments1",
    }
    const result = await sut.perform(inputDto) 
    expect(result.message).toBe("item cadastrado no inventário");
    expect(result.status).toBe(200)
  })

  test("should generate an error if any item is passed with an empty value", async () => {    
    const inventoryMock = new InventoryMock();
    const sut = new InsertItemUseCase(inventoryMock);
    const input = {     
      id: "",
      name: "Item1",
      amount: 1,
      serialNumber: "SN123",
      technicalSpecifications: "Specs",
      owner: "Owner1",
      location: "Location1",
      comments: "Comments1",
    };   
    const result = await sut.perform(input)    
    console.log(result.message)
    expect(result.message).toEqual("Missing param: ID");
    expect(result.status).toBe(400);
  })

  test("should generate an error if any item is passed with an invalid value", async () => {    
    const inventoryMock = new InventoryMock();
    const sut = new InsertItemUseCase(inventoryMock);
    const input = {     
      id: 545454554 as any,
      name: "Item1",
      amount: 1,
      serialNumber: "SN123",
      technicalSpecifications: "Specs",
      owner: "Owner1",
      location: "Location1",
      comments: "Comments1",
    };   
    const result = await sut.perform(input)    
    console.log(result.message)
    expect(result.message).toEqual("Invalid param: ID");
    expect(result.status).toBe(400);
  });

  test("should generate an error if any item is passed with an invalid value", async () => {    
    const inventoryMock = new inventoryMockWithError();
    const sut = new InsertItemUseCase(inventoryMock);
    const input = {     
      id: "656565",
      name: "Item1",
      amount: 1,
      serialNumber: "SN123",
      technicalSpecifications: "Specs",
      owner: "Owner1",
      location: "Location1",
      comments: "Comments1",
    };   
    const result = await sut.perform(input)    
    console.log(result.message)
    expect(result.message).toEqual("erro 500 simulado");
    expect(result.status).toBe(400);
  });
})  