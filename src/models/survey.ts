import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('surveys')
export default class Survey {
    @PrimaryColumn()
    readonly id!: string

    @Column()
    title!: string

    @Column()
    description!: string

    @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createdAt!: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }
}