import { router } from "../routes/router"
import express from "express"
import dotenv from "dotenv"
const app = express()
dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

const PORT = 8888

if (process.env.NODE_ENV !== "test")
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

export {
  app
}