export class NotFoundError extends Error {
  constructor() {
    super('Item não existe no inventário')
    this.name = 'Item não existe no inventário'
  }
}