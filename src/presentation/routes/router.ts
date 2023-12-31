import { Router } from "express"
import { adaptInsertItemController } from "../adapters/express-route-adapter"
import { adapterFindAllItemsController } from "../adapters/express-route-adapter"
import { makeInsertItemController } from "../factories/insert"
import { makeFindAllItemsController } from "../factories/find-all"
const router = Router()


router.post("/item", adaptInsertItemController(makeInsertItemController()))
router.get("/items", adapterFindAllItemsController(makeFindAllItemsController()))


export { router }