import { InsertItemController } from "../controllers/insert-item-controller"

export const makeInsertItemController = (): InsertItemController => {
  const insertItemController = new InsertItemController()
  return insertItemController
}