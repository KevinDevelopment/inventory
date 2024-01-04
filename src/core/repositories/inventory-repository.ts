import { Inventory } from "../domain/entities/inventory/inventory"
import { FindAllItemsInInventoryOutPutDto } from "../dto/find-all-items-dto"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../dto/find-item-by-id-dto"
import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../dto/increment-item-dto"

export interface InsertItemInInventory {
  add(inventory: Inventory): Promise<void>
}

export interface FindAllItemsInInventory {
  find(): Promise<FindAllItemsInInventoryOutPutDto[]>;
}

export interface FindItemById {
  findById(id: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto>
}

export interface IncrementItemInInventory {
  increment(item: IncreaseItemInputDto): Promise<IncreaseItemOutputDto>
}