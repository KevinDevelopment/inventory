import { InsertItemController } from "../controllers/insert-item/insert-item-controller"

export const makeInsertItemController = (): InsertItemController => {
  const insertItemController = new InsertItemController()
  return insertItemController
}