import { Entity, ObjectIdColumn , Column, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
}