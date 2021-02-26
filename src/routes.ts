import { Router } from "express"
import { AnswerController } from "./controllers/answer-controller"
import NpsController from "./controllers/nps-controller"
import SendMailController from "./controllers/send-mail-controller"
import SurveyController from "./controllers/survey-controller"
import UserController from "./controllers/user-controller"

const router = Router()

const userController = new UserController()
const surveyController = new SurveyController()
const sendMailController = new SendMailController()
const answerController = new AnswerController()
const npsController = new NpsController()

router.post('/users', userController.create)

router.post('/surveys', surveyController.create)
router.get('/surveys', surveyController.show)

router.post('/send-mail', sendMailController.sendMail)

router.get('/answers/:value/:surveyUserId', answerController.answer)

router.get('/nps/:surveyId', npsController.calculate)

export default router