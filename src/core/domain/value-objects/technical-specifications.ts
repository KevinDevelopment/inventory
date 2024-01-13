import { MissingParamError } from "../errors/missing-param-error"
import { InvalidParamError } from "../errors/invalid-param-error"
import { InvalidAction } from "../errors"

export class TechnicalSpecifications {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new InvalidAction("As especificações técnicas do item precisam ser informadas")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidAction("As especificações técnicas precisam ser do tipo texto")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}