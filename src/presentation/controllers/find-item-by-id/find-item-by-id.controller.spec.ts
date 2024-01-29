import { describe, test, expect } from "vitest"
import supertest from "supertest"
import { server } from "../../web/express"

describe("FindItemByIdController E2E", () => {
  test("Should return an item is id exists", async () => {
    const response = await supertest(server)
      .get("/item/ea240499-5210-4eb9-9c1d-b4c587688c2c")
      .set("authorization", `Bearer ${process.env.INTERNAL_LOCAL_TOKEN}`)

    const result = JSON.parse(response.text)
    console.log(result)
    expect(result.status).toBe(200)
    expect(result.message).toBe("Item retornado com sucesso")
  })  
})