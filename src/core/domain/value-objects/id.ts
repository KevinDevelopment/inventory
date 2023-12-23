import { MissingParamError } from "../errors/missing-param-error"
import { InvalidParamError } from "../errors/invalid-param-error"

export class ID {
  private readonly _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new MissingParamError("ID")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidParamError("ID")
    }

    this._value = _value
    Object.freeze(this)
  }

  public get value(): string {
    return this._value
  }
}