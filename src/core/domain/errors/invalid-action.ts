export class InvalidAction extends Error {
  constructor(message: string) {
    super(message)
    this.name = "InvalidAction"
  }
}