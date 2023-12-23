import { MissingParamError } from "../errors/missing-param-error"
import { InvalidParamError } from "../errors/invalid-param-error"

export class Name {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new MissingParamError("name")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidParamError("name")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}