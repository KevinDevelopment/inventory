import { AuthenticationMiddleware } from "../middlewares/authentication-middlware"
import { Request, Response, NextFunction } from "express"
import { HttpResponse } from "../ports/middleware"

export const authenticationMiddlewareAdapter = (middleware: typeof AuthenticationMiddleware) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const httpResponse: HttpResponse | void = middleware.perform(req)
    if (httpResponse) {
      return res.status(httpResponse.status).json(httpResponse)
    } else {
      next()
    }
  }
}
