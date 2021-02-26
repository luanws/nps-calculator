import { EntityRepository, Repository } from "typeorm"
import SurveyUser from "../models/survey-user"

@EntityRepository(SurveyUser)
export default class SurveyUserRepository extends Repository<SurveyUser> {

}