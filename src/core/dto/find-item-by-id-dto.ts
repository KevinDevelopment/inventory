export interface FindItemByIdInputDto {
  id: string
}

export interface FindItemByIdOutPutDto {
  id: string
  name: string
  amount: number
  serialNumber: string
  technicalSpecifications: string
  owner: string
  location: string
  comments: string
}