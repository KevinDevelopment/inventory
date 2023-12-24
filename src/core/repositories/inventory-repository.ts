import { Inventory } from "../domain/entities/inventory/inventory"

export interface InsertItemInInventory {
  add(inventory: Inventory): Promise<void>
}