import { InsertItemInInventory } from "../../repositories/inventory-repository"
import { InventoryInputDto } from "../../dto/inventory-dto"
import { InventoryOutputDto } from "../../dto/inventory-dto"
import { Inventory } from "../../domain/entities/inventory/inventory"
import { FindItemByName } from "../../repositories/inventory-repository"
import { InvalidAction } from "../../domain/errors"

export class InsertItemUseCase {
  private _insertItemInInventory: InsertItemInInventory
  private _findItemByName: FindItemByName

  constructor(_insertItemInInventory: InsertItemInInventory, _findItemByName: FindItemByName) {
    this._insertItemInInventory = _insertItemInInventory
    this._findItemByName = _findItemByName
  }

  async perform(input: InventoryInputDto): Promise<InventoryOutputDto> {
    
    const inventory = Inventory.create(
      input.name,
      input.amount,
      input.serialNumber,
      input.technicalSpecifications,
      input.owner,
      input.location,
      input.comments
    )

    const itemExistsInInventory = await this._findItemByName.findByName(input.name)
    if (itemExistsInInventory) throw new InvalidAction("O item ja existe no inventário")
    const insertItemInInventory = await this._insertItemInInventory.add(inventory)

    return {
      message: "item cadastrado no inventário",
      status: 200
    }
  }
}