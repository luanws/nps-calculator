import { Entity } from "typeorm";

@Entity()
export default class User {
    id!: string
    name!: string
    email!: string
    createdAt!: Date
}