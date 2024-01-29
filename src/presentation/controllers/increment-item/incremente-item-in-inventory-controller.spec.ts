import { describe, test, expect } from "vitest"
import supertest from "supertest"
import { server } from "../../web/express"


describe("IncrementItemInInventoryController E2E", () => {
  test("Should return an item when amount is added", async () => {
    const response = await supertest(server)
      .patch("/item")
      .set("authorization", `Bearer ${process.env.INTERNAL_LOCAL_TOKEN}`)
      .send({
        id: "ea240499-5210-4eb9-9c1d-b4c587688c2c",
        amount: 100
      })

    const result = JSON.parse(response.text)
    console.log(result)
    expect(result.status).toBe(200)
    expect(result.message).toBe("Dados alterados com sucesso")
  })
})