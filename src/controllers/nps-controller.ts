import { Request, Response } from "express"
import { getCustomRepository, IsNull, Not } from "typeorm"
import SurveyUserRepository from "../repositories/survey-user-repository"

export default class NpsController {
    async calculate(request: Request, response: Response) {
        const { surveyId } = request.params

        const surveyUserRepository = getCustomRepository(SurveyUserRepository)

        const surveysUsers = await surveyUserRepository.find({
            surveyId,
            value: Not(IsNull())
        })

        const detractors = surveysUsers.filter(surveyUser => (
            surveyUser.value >= 0 && surveyUser.value <= 6
        )).length

        const promoters = surveysUsers.filter(surveyUser => (
            surveyUser.value >= 9 && surveyUser.value <= 10
        )).length

        const passives = surveysUsers.filter(surveyUser => (
            surveyUser.value >= 7 && surveyUser.value <= 8
        )).length


        const totalAnswers = surveysUsers.length
        const nps = ((promoters - detractors) / totalAnswers)

        return response.json({
            detractors,
            promoters,
            passives,
            totalAnswers,
            nps
        })
    }
}