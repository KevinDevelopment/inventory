import { describe, test, expect } from "vitest";
import { Inventory } from "./inventory";
import { ID } from "../../value-objects/id";
import { Name } from "../../value-objects/name";
import { Amount } from "../../value-objects/amount";
import { SerialNumber } from "../../value-objects/serial-number";
import { TechnicalSpecifications } from "../../value-objects/technical-specifications";
import { Owner } from "../../value-objects/owner";
import { Location } from "../../value-objects/location";
import { Comments } from "../../value-objects/comments";
import { InvalidParamError } from "../../errors/invalid-param-error";
import { MissingParamError } from "../../errors/missing-param-error";

describe("Inventory Entity", () => {
  test("should return correct id", () => {
    const inventory = new Inventory(
      new ID("152525225525"),
      new Name("kevin ferreira"),
      new Amount(45665),
      new SerialNumber("445564-565777"),
      new TechnicalSpecifications("32 polegadas ips full hd"),
      new Owner("kevin ferreira"),
      new Location("são paulo"),
      new Comments("comentarios aqui")
    )

    expect(inventory.id.value).toEqual("152525225525");
  })

  test("should throw error if id is not provided", () => {
    const createInventoryWithInvalidId = () => {
      new Inventory(
        new ID(null as any),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidId).toThrowError(new MissingParamError("ID"));
  })

  test("should throw error if id is invalid", () => {
    const createInventoryWithInvalidId = () => {
      new Inventory(
        new ID(5454545454 as any),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidId).toThrowError(new InvalidParamError("ID"));
  })

  test("should return correct name", () => {
    const inventory = new Inventory(
      new ID("152525225525"),
      new Name("kevin ferreira"),
      new Amount(45665),
      new SerialNumber("445564-565777"),
      new TechnicalSpecifications("32 polegadas ips full hd"),
      new Owner("kevin ferreira"),
      new Location("são paulo"),
      new Comments("comentarios aqui")
    )

    expect(inventory.name.value).toEqual("kevin ferreira")
  })

  test("should throw error if name is not provided", () => {
    const createInventoryWithInvalidName = () => {
      new Inventory(
        new ID("152525225525"),
        new Name(null as any),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidName).toThrowError(new MissingParamError("name"));
  })

  test("should throw error if name is invalid", () => {
    const createInventoryWithInvalidName = () => {
      new Inventory(
        new ID("152525225525"),
        new Name(656565656 as any),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidName).toThrowError(new InvalidParamError("name"));
  })
})
