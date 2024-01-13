import { InvalidAction } from "../errors"

export class SerialNumber {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new InvalidAction("O número de série do item precisa ser informado")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidAction("O núemro de série do item precisa ser um texto")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
} 