import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import UserRepository from "../repositories/user-repository"
import * as yup from 'yup'

export default class UserController {
    async create(request: Request, response: Response) {
        const schema = yup.object().shape({
            name: yup.string().required('Nome obrigatório'),
            email: yup.string().email('E-mail inválido').required('E-mail obrigatório')
        })

        await schema.validate(request.body, { abortEarly: false })

        const { name, email } = request.body

        const userRepository = getCustomRepository(UserRepository)
        const user = userRepository.create({
            name,
            email
        })
        await userRepository.save(user)

        return response.status(201).json(user)
    }
}