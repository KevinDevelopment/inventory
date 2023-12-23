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

  test("should return correct amount", () => {
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

    expect(inventory.amount.value).toEqual(45665)
  })

  test("should throw error if amount is not provided", () => {
    const createInventoryWithInvalidAmount = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(null as any),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new MissingParamError("amount"));
  })

  test("should throw error if amount is invalid", () => {
    const createInventoryWithInvalidAmount = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount("5454554" as any),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new InvalidParamError("amount"));
  })

  test("should return correct serial number", () => {
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

    expect(inventory.serialNumber.value).toEqual("445564-565777")
  })

  test("should throw error if serial number is not provided", () => {
    const createInventoryWithInvaliSerialNumber = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber(null as any),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliSerialNumber).toThrowError(new MissingParamError("serial number"));
  })

  test("should throw error if serial number is invalid", () => {
    const createInventoryWithInvalidAmount = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber(5454545 as any),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new InvalidParamError("serial number"));
  })

  test("should return correct technical specifications", () => {
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

    expect(inventory.technicalSpecifications.value).toEqual("32 polegadas ips full hd")
  })

  test("should throw error if technical specifications is not provided", () => {
    const createInventoryWithInvaliTechnicalSpecifications = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications(null as any),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliTechnicalSpecifications).toThrowError(new MissingParamError("technical specifications"));
  })

  test("should throw error if technical specifications is invalid", () => {
    const createInventoryWithInvaliTechnicalSpecifications = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications(656565665 as any),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliTechnicalSpecifications).toThrowError(new InvalidParamError("technical specifications"));
  })

  test("should return correct owner", () => {
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

    expect(inventory.Owner.value).toEqual("kevin ferreira")
  })

  test("should throw error if owner is not provided", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner(null as any),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new MissingParamError("owner"));
  })

  test("should throw error if owner is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner(434343443 as any),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidParamError("owner"))
  })

  test("should return correct location", () => {
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

    expect(inventory.location.value).toEqual("são paulo")
  })

  test("should throw error if location is not provided", () => {
    const createInventoryWithInvalidLocation = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location(null as any),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidLocation).toThrowError(new MissingParamError("location"));
  })

  test("should throw error if location is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location(54544545 as any),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidParamError("location"))
  })

  test("should return correct comments", () => {
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

    expect(inventory.comments.value).toEqual("comentarios aqui")
  })

  test("should throw error if comments is not provided", () => {
    const createInventoryWithInvalidLocation = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments(null as any)
      )
    }

    expect(createInventoryWithInvalidLocation).toThrowError(new MissingParamError("comments"));
  })

  test("should throw error if comments is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(
        new ID("152525225525"),
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments(878787 as any)
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidParamError("comments"))
  })
})
