import { EntityRepository, Repository } from "typeorm"
import User from "../models/user"

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
} 