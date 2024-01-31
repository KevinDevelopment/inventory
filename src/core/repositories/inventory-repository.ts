import { Inventory } from "../domain/entities/inventory/inventory"
import { FindAllItemsInInventoryOutPutDto } from "../dto/find-all-items-dto"
import { FindItemByIdInputDto, FindItemByIdOutPutDto } from "../dto/find-item-by-id-dto"
import { IncreaseItemInputDto, IncreaseItemOutputDto } from "../dto/increment-item-dto"

export interface InsertItemInInventory {
  handle(inventory: Inventory): Promise<void>
}

export interface FindAllItemsInInventory {
  handle(): Promise<FindAllItemsInInventoryOutPutDto[]>;
}

export interface FindItemById {
  handle(input: FindItemByIdInputDto): Promise<FindItemByIdOutPutDto>
}

export interface FindItemByName {
  handle(name: string): Promise<boolean>
}

export interface IncrementItemInInventory {
  handle(item: IncreaseItemInputDto): Promise<IncreaseItemOutputDto>
}