import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('users')
export default class User {
    @PrimaryColumn()
    readonly id!: string

    @Column()
    name!: string

    @Column()
    email!: string

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
}