import { Request, Response } from "express"

export default class UserController {
    async create(request: Request, response: Response) {
        const body = request.body
        console.log(body)
        return response.send()
    }
}