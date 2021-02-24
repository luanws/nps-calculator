import { EntityRepository, Repository } from "typeorm"
import Survey from "../models/survey"

@EntityRepository(Survey)
export default class SurveyRepository extends Repository<Survey> {
} 