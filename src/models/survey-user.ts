import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

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

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}