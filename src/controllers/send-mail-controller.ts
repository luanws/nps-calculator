import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import SurveyRepository from "../repositories/survey-repository"
import SurveyUserRepository from "../repositories/survey-user-repository"
import UserRepository from "../repositories/user-repository"

export default class SendMailController {
    async sendMail(request: Request, response: Response) {
        const { email, surveyId } = request.body

        const userRepository = getCustomRepository(UserRepository)
        const surveyRepository = getCustomRepository(SurveyRepository)
        const surveyUserRepository = getCustomRepository(SurveyUserRepository)
        
        const user = await userRepository.findOne({ email })
        if (!user) {
            return response.status(400).json({
                error: 'User does not exists'
            })
        }
        
        const survey = await surveyRepository.findOne({ id: surveyId })
        if (!survey) {
            return response.status(400).json({
                error: 'Survey does not exists'
            })
        }

        const surveyUser = surveyUserRepository.create({
            userId: user.id,
            surveyId: surveyId
        })

        await surveyUserRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}