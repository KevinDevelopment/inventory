import { ID } from "../../value-objects/id"
import { Name } from "../../value-objects/name"
import { Amount } from "../../value-objects/amount"
import { SerialNumber } from "../../value-objects/serial-number"
import { TechnicalSpecifications } from "../../value-objects/technical-specifications"
import { Owner } from "../../value-objects/owner"
import { Location } from "../../value-objects/location"
import { Comments } from "../../value-objects/comments"

export class Inventory {
  private readonly _id: ID
  private _name: Name
  private _amount: Amount
  private _serialNumber: SerialNumber
  private _technicalSpecifications: TechnicalSpecifications
  private _owner: Owner
  private _location: Location
  private _comments: Comments

  constructor
    (
      _id: ID,
      _name: Name,
      _amount: Amount,
      _serialNumber: SerialNumber,
      _technicalSpecifications: TechnicalSpecifications,
      _owner: Owner,
      _location: Location,
      _comments: Comments
    ) {
    this._id = _id
    this._name = _name
    this._amount = _amount
    this._serialNumber = _serialNumber
    this._technicalSpecifications = _technicalSpecifications
    this._owner = _owner
    this._location = _location
    this._comments = _comments
  }

  public get id(): ID {
    return this._id
  }

  public get name(): Name {
    return this._name
  }

  public get amount(): Amount {
    return this._amount
  }

  public get serialNumber(): SerialNumber {
    return this._serialNumber
  }

  public get technicalSpecifications(): TechnicalSpecifications {
    return this._technicalSpecifications
  }

  public get owner(): Owner {
    return this._owner
  }

  public get location(): Location {
    return this._location
  }

  public get comments(): Comments {
    return this._comments
  }

  public InsertItemName(_name: Name) {
    this._name = _name
  }

  public enterQuantityInStock(_amount: Amount) {
    this._amount = _amount
  }

  public insertSerialNumber(_serialNumber: SerialNumber) {
    this._serialNumber = _serialNumber
  }

  public insertTechnicalSpecifications(_technicalSpecifications: TechnicalSpecifications) {
    this._technicalSpecifications = _technicalSpecifications
  }

  public insertItemOwner(_owner: Owner) {
    this._owner = _owner
  }

  public enterLocation(_location: Location) {
    this._location = _location
  }

  public insertComments(_comments: Comments) {
    this._comments = _comments
  }

}


