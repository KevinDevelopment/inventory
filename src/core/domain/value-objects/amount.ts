import { InvalidParamError } from "../errors/invalid-param-error"
import { MissingParamError } from "../errors/missing-param-error"

export class Amount {
  private _value: number

  constructor(_value: number) {
    if (!_value) {
      throw new MissingParamError("amount")
    }

    if (typeof (_value) !== "number") {
      throw new InvalidParamError("amount")
    }

    this._value = _value
  }

  public get value(): number {
    return this._value
  }
}