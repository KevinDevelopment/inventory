import { describe, test, expect } from "vitest"
import { Inventory } from "./inventory"
import { Name } from "../../value-objects/name"
import { Amount } from "../../value-objects/amount"
import { SerialNumber } from "../../value-objects/serial-number"
import { TechnicalSpecifications } from "../../value-objects/technical-specifications"
import { Owner } from "../../value-objects/owner"
import { Location } from "../../value-objects/location"
import { Comments } from "../../value-objects/comments"
import { InvalidAction } from "../../errors"

describe("Inventory Entity", () => {
  test("should return correct name", () => {
    const inventory = new Inventory(      
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
        new Name(null as any),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidName).toThrowError(new InvalidAction("O nome do item precisa ser informado"))
  })

  test("should throw error if name is invalid", () => {
    const createInventoryWithInvalidName = () => {
      new Inventory(        
        new Name(656565656 as any),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidName).toThrowError(new InvalidAction("O nome do item precisa ser um texto"))
  })

  test("should return correct amount", () => {
    const inventory = new Inventory(      
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
        new Name("kevin ferreira"),
        new Amount(null as any),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new InvalidAction("Quantidade não pode ser vazia"))
  })

  test("should throw error if amount is invalid", () => {
    const createInventoryWithInvalidAmount = () => {
      new Inventory(       
        new Name("kevin ferreira"),
        new Amount("5454554" as any),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new InvalidAction("Quantidade precisa ser um número"))
  })

  test("should return correct serial number", () => {
    const inventory = new Inventory(      
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
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber(null as any),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliSerialNumber).toThrowError(new InvalidAction("O número de série do item precisa ser informado"))
  })

  test("should throw error if serial number is invalid", () => {
    const createInventoryWithInvalidAmount = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber(5454545 as any),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidAmount).toThrowError(new InvalidAction("O número de série do item precisa ser um texto"))
  })

  test("should return correct technical specifications", () => {
    const inventory = new Inventory(      
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
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications(null as any),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliTechnicalSpecifications).toThrowError(new InvalidAction("As especificações técnicas do item precisam ser informadas"))
  })

  test("should throw error if technical specifications is invalid", () => {
    const createInventoryWithInvaliTechnicalSpecifications = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications(656565665 as any),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvaliTechnicalSpecifications).toThrowError(new InvalidAction("As especificações técnicas precisam ser do tipo texto"))
  })

  test("should return correct owner", () => {
    const inventory = new Inventory(      
      new Name("kevin ferreira"),
      new Amount(45665),
      new SerialNumber("445564-565777"),
      new TechnicalSpecifications("32 polegadas ips full hd"),
      new Owner("kevin ferreira"),
      new Location("são paulo"),
      new Comments("comentarios aqui")
    )

    expect(inventory.owner.value).toEqual("kevin ferreira")
  })

  test("should throw error if owner is not provided", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner(null as any),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidAction("O responsável pelo item precisa ser informado"))
  })

  test("should throw error if owner is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner(434343443 as any),
        new Location("são paulo"),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidAction("O nome do responsável precisa ser um texto"))
  })

  test("should return correct location", () => {
    const inventory = new Inventory(     
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
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location(null as any),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidLocation).toThrowError(new InvalidAction("A localização precisa ser informada"))
  })

  test("should throw error if location is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location(54544545 as any),
        new Comments("comentarios aqui")
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidAction("A localização precisa ser uma string"))
  })

  test("should return correct comments", () => {
    const inventory = new Inventory(      
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
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments(null as any)
      )
    }

    expect(createInventoryWithInvalidLocation).toThrowError(new InvalidAction("Comentário precisa ser informado"))
  })

  test("should throw error if comments is invalid", () => {
    const createInventoryWithInvalidOwner = () => {
      new Inventory(        
        new Name("kevin ferreira"),
        new Amount(45665),
        new SerialNumber("445564-565777"),
        new TechnicalSpecifications("32 polegadas ips full hd"),
        new Owner("kevin ferreira"),
        new Location("são paulo"),
        new Comments(878787 as any)
      )
    }

    expect(createInventoryWithInvalidOwner).toThrowError(new InvalidAction("Comentário precisa ser um texto"))
  })  
})
