import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import SurveyUserRepository from "../repositories/survey-user-repository"

export class AnswerController {
    async answer(request: Request, response: Response) {
        const { value, surveyUserId } = request.params

        const surveyUserRepository = getCustomRepository(SurveyUserRepository)
        const surveyUser = await surveyUserRepository.findOne({ id: surveyUserId })

        if (!surveyUser) return response.status(400).json({
            error: 'Survey User does not exists!'
        })

        surveyUser.value = Number(value)
        await surveyUserRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}