import { InsertItemInInventory } from "../repositories/inventory-repository"
import { InventoryInputDto } from "../dto/inventory-dto"
import { InventoryOutputDto } from "../dto/inventory-dto"
import { Inventory } from "../domain/entities/inventory/inventory"
import { Name } from "../domain/value-objects/name"
import { Amount } from "../domain/value-objects/amount"
import { SerialNumber } from "../domain/value-objects/serial-number"
import { TechnicalSpecifications } from "../domain/value-objects/technical-specifications"
import { Owner } from "../domain/value-objects/owner"
import { Location } from "../domain/value-objects/location"
import { Comments } from "../domain/value-objects/comments"
import { FindItemByName } from "../repositories/inventory-repository"
import { ItemExist } from "../domain/errors/item-exists-error"

export class InsertItemUseCase {
  private _insertItemInInventory: InsertItemInInventory
  private _findItemByName: FindItemByName

  constructor(_insertItemInInventory: InsertItemInInventory, _findItemByName: FindItemByName) {
    this._insertItemInInventory = _insertItemInInventory
    this._findItemByName = _findItemByName
  }

  async perform(input: InventoryInputDto): Promise<InventoryOutputDto> {
    try {
      const inventory = new Inventory(
        new Name(input.name),
        new Amount(input.amount),
        new SerialNumber(input.serialNumber),
        new TechnicalSpecifications(input.technicalSpecifications),
        new Owner(input.owner),
        new Location(input.location),
        new Comments(input.comments)
      )

      const itemExistsInInventory = await this._findItemByName.findByName(input.name)

      if (itemExistsInInventory) throw new ItemExist()
      
      const insertItemInInventory = await this._insertItemInInventory.add(inventory)
      return {
        message: "item cadastrado no inventário",
        status: 200
      }
    } catch (error) {
      if (error instanceof Error) {
        return {
          message: error.message,
          status: 403
        }
      }

      return {
        message: "erro interno do servidor",
        status: 500
      }
    }
  }
}