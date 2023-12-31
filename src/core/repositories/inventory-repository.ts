import { Inventory } from "../domain/entities/inventory/inventory"
import { FindAllItemsInInventoryOutPutDto } from "../dto/find-all-items-dto"

export interface InsertItemInInventory {
  add(inventory: Inventory): Promise<void>
}

export interface FindAllItemsInInventory {
  find(): Promise<FindAllItemsInInventoryOutPutDto[]>;
}