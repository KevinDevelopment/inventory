export interface InventoryInputDto {  
  name: string
  amount: number
  serialNumber: string
  technicalSpecifications: string
  owner: string
  location: string
  comments: string
}

export interface InventoryOutputDto {
  message: string
  status: number
}