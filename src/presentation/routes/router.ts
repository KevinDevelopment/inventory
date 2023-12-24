import { Router } from "express"
import { adaptRouter } from "../adapters/express-route-adapter"
import { makeInsertItemController } from "../factories/insert"
const router = Router()


router.post("/item", adaptRouter(makeInsertItemController()))


export { router }