import { FindAllItemsInInventoryController } from "../controllers/find-all-items-in-inventory-controller"

export const makeFindAllItemsController = (): FindAllItemsInInventoryController => {
  const findAllItemsController = new FindAllItemsInInventoryController()
  return findAllItemsController
}