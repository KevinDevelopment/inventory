import { Router } from "express"
import { adaptInsertItemController } from "../adapters/express-route-adapter"
import { adapterFindAllItemsController } from "../adapters/express-route-adapter"
import { adapterFindItemByIdController } from "../adapters/express-route-adapter"
import { adapterIncrementItemInInventoryController } from "../adapters/express-route-adapter"
import { makeInsertItemController } from "../factories/insert"
import { makeFindAllItemsController } from "../factories/find-all"
import { makeFindItemByIdController } from "../factories/find-by-id"
import { makeIncrementController } from "../factories/increment-item"
import { AuthenticationMiddleware } from "../middlewares/authentication-middlware"
import { authenticationMiddlewareAdapter } from "../adapters/express-middleware-adapter"
const router = Router()

router.post("/item", authenticationMiddlewareAdapter(AuthenticationMiddleware), adaptInsertItemController(makeInsertItemController()))
router.get("/items", authenticationMiddlewareAdapter(AuthenticationMiddleware), adapterFindAllItemsController(makeFindAllItemsController()))
router.get("/item/:id", authenticationMiddlewareAdapter(AuthenticationMiddleware), adapterFindItemByIdController(makeFindItemByIdController()))
router.patch("/item", authenticationMiddlewareAdapter(AuthenticationMiddleware), adapterIncrementItemInInventoryController(makeIncrementController()))

export { router }