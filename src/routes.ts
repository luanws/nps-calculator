import { Router } from "express"
import SurveyController from "./controller/survey-controller"
import UserController from "./controller/user-controller"

const router = Router()

const userController = new UserController()
const surveyController = new SurveyController()

router.post('/users', userController.create)
router.post('/surveys', surveyController.create)

export default router