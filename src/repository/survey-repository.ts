import { EntityRepository, Repository } from "typeorm"
import Survey from "../model/survey"

@EntityRepository(Survey)
export default class SurveyRepository extends Repository<Survey> {
} 