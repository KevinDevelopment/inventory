import { IncrementItemInInventoryController } from "../controllers/increment-item-in-inventory-controller"

export const makeIncrementController = (): IncrementItemInInventoryController => {
  const incrementController = new IncrementItemInInventoryController()
  return incrementController
}