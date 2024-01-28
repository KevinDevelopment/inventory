import { router } from "../routes/router"
import express from "express"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

const PORT = 8888

export const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})