import { describe, test, expect } from "vitest"
import supertest from "supertest"
import { server } from "../../web/express"

describe("FindAllItemInInventoryController E2E", () => {
  test("/ITEMS should return an array of objects when token is provided",async () => {
    const response = await supertest(server)
    .get("/items")
    .set("authorization", `Bearer ${process.env.INTERNAL_LOCAL_TOKEN}`)    

    const result = JSON.parse(response.text)
    console.log(result)
    expect(result.status).toBe(200)
    expect(result.message).toBe("items no inventario retornados com sucesso")
    expect(result.data.length).toBeGreaterThanOrEqual(0)
  })  
})