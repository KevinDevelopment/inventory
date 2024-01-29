import { FindItemByIdController } from "../controllers/find-item-by-id/find-item-by-id-controller"

export const makeFindItemByIdController = (): FindItemByIdController => {
  const findByIdControler = new FindItemByIdController()
  return findByIdControler
}