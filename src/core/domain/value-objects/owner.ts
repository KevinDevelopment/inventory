import { InvalidAction } from "../errors"

export class Owner {
  private _value: string

  constructor(_value: string) {
    if (!_value) {
      throw new InvalidAction("O reponsável pelo item precisa ser informado")
    }

    if (typeof (_value) !== "string") {
      throw new InvalidAction("O nome do responsável precisa ser um texto")
    }

    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}