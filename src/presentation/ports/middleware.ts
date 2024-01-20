export interface Next {
  (): void
}

export interface HttpResponse {
  message: string
  status: number 
}

export interface HttpRequest {
  body?: any
  headers?: any
}