export interface HttpResponse {
  message: string
  status: number
  body: any
}

export interface HttpRequest {
  body?: any
  headers?: any
  params?: any
}