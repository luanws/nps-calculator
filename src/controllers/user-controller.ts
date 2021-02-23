import { Request, Response } from "express"
import { getRepository, Repository } from "typeorm"
import User from "../models/user"

export default class UserController {
    userRepository: Repository<User>

    constructor() {
        this.userRepository = getRepository(User)
    }

    async create(request: Request, response: Response) {
        const { name, email } = request.body

        const user = this.userRepository.create({
            name,
            email
        })

        await this.userRepository.save(user)

        return response.json(user)
    }
}