export class InvalidSearchError extends Error {
  constructor() {
    super(`Não foi possovel localizar item pelo id`)
    this.name = 'Não foi possovel localizar item pelo id'
  }
}