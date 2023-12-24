import express from "express"
import { router } from "../routes/router"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
const PORT = 8080

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})