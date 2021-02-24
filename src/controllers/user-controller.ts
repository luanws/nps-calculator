import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import UserRepository from "../repositories/user-repository"

export default class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body

        const userRepository = getCustomRepository(UserRepository)
        const user = userRepository.create({
            name,
            email
        })

        await userRepository.save(user)

        return response.json(user)
    }
}