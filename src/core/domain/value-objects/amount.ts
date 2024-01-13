import { InvalidAction } from "../errors";

export class Amount {
  private _value: number

  constructor(_value: number) {
    if (_value === null || _value === undefined) {
      throw new InvalidAction("Quantidade não pode ser vazia");
    }

    if (!_value) {
      throw new InvalidAction("Quantidade informada é inválida")
    }

    if (typeof (_value) !== "number") {
      throw new InvalidAction("Quantidade precisa ser um número")
    }

    this._value = _value
  }

  public get value(): number {
    return this._value
  }
}