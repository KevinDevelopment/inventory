import { Router } from "express"
import { adaptInsertItemController } from "../adapters/express-route-adapter"
import { adapterFindAllItemsController } from "../adapters/express-route-adapter"
import { adapterFindItemByIdController } from "../adapters/express-route-adapter"
import { adapterIncrementItemInInventoryController } from "../adapters/express-route-adapter"
import { makeInsertItemController } from "../factories/insert"
import { makeFindAllItemsController } from "../factories/find-all"
import { makeFindItemByIdController } from "../factories/find-by-id"
import { makeIncrementController } from "../factories/increment-item"
const router = Router()

router.post("/item", adaptInsertItemController(makeInsertItemController()))
router.get("/items", adapterFindAllItemsController(makeFindAllItemsController()))
router.get("/item/:id", adapterFindItemByIdController(makeFindItemByIdController()))
router.patch("/item", adapterIncrementItemInInventoryController(makeIncrementController()))

export { router }