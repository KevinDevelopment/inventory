export class ItemExist extends Error {
  constructor() {
    super(`Não é possivel inserir pois o item já existe no inventario`)
    this.name = 'Não é possivel inserir pois o item já existe no inventario'
  }
}