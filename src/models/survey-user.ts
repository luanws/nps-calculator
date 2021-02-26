import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'
import Survey from "./survey"
import User from "./user"

@Entity('surveys_users')
export default class SurveyUser {
    @PrimaryColumn()
    readonly id!: string

    @Column({ name: 'user_id' })
    userId!: string

    @Column({ name: 'survey_id' })
    surveyId!: string

    @Column()
    value!: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user!: User

    @ManyToOne(() => Survey)
    @JoinColumn({ name: 'survey_id' })
    survey!: Survey

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}