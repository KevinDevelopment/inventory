import { InvalidAction } from "../errors"

export class Location {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new InvalidAction("A localização precisa ser informada")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidAction("A localização precisa ser uma string")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}