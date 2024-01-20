import { HttpResponse, HttpRequest } from "../ports/middleware"

export class AuthenticationMiddleware {
  public static perform(req: HttpRequest): HttpResponse | void {
    const authHeader = req.headers.authorization as string

    if (!authHeader) {
      return {
        status: 401,
        message: "Cabeçalho de autenticação não encontrado"
      }
    }

    const [bearer, token] = authHeader.split(" ")

    if (bearer !== "Bearer") {
      return {
        status: 402,
        message: "Parâmetros faltando"
      }
    }

    if (!token) {
      return {
        status: 401,
        message: "Token não esta presente"
      }
    }

    if (token !== process.env.INTERNAL_LOCAL_TOKEN) {
      return {
        status: 401,
        message: "Token inválido"
      }
    }    

  }
}