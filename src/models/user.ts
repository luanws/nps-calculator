import { Column, Entity, PrimaryColumn } from "typeorm"
import uuid from 'uuid'

@Entity()
export default class User {
    @PrimaryColumn()
    readonly id!: string

    @Column()
    name!: string

    @Column()
    email!: string

    @Column({ name: 'created_at' })
    createdAt!: Date

    constructor() {
        if (!this.id) this.id = uuid.v4()
    }
}