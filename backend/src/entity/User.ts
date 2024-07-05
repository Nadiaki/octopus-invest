import { Entity, ObjectIdColumn , Column, BaseEntity } from "typeorm"
import { UserCourseProgress } from "./UserCourseProgress"

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

    @Column((type) => UserCourseProgress)
    progress: UserCourseProgress[]
}