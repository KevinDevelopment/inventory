import { InvalidAction } from "../errors"

export class Comments {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new InvalidAction("Comentário precisa ser informado")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidAction("Comentário precisa ser um texto")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}