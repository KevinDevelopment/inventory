import { Inventory } from "../domain/entities/inventory/inventory"
import { FindAllItemsInInventoryOutPutDto } from "../dto/find-all-items-dto"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../dto/find-item-by-id-dto";

export interface InsertItemInInventory {
  add(inventory: Inventory): Promise<void>
}

export interface FindAllItemsInInventory {
  find(): Promise<FindAllItemsInInventoryOutPutDto[]>;
}

export interface FindItemById {
  findById(id: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto>
}