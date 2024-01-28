import { describe, test, expect } from "vitest"
import supertest from "supertest"
import { server } from "../../web/express"
import { randomUUID } from "crypto"

describe("InserItemInInventoryControler E2E", () => {
  test("Shoul return an message and status 201 if insert item succesfully", async () => {
    const response = await supertest(server)
      .post("/item")
      .set("authorization", `Bearer ${process.env.INTERNAL_LOCAL_TOKEN}`)
      .send(
        {
          id: randomUUID(),
          name: "Kevin Fereiraaa",
          amount: 400,
          comments: "valid_comments",
          location: "valid_location",
          owner: "Kevin Ferreira",
          serial_number: "65m6k56j565",
          technical_specifications: "CORE i7"
        }
      )

    const output = JSON.parse(response.text)
    console.log(output)
    expect(output.status).toBe(200)
  })
})