import { IncrementItemInInventoryController } from "../controllers/increment-item/increment-item-in-inventory-controller"

export const makeIncrementController = (): IncrementItemInInventoryController => {
  const incrementController = new IncrementItemInInventoryController()
  return incrementController
}