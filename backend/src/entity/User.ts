import { Entity, ObjectIdColumn , Column, BaseEntity } from "typeorm"
import { UserCourseProgress } from "./UserCourseProgress"

@Entity()
export class User extends BaseEntity {
    @ObjectIdColumn()
    _id: number

    @Column()
    userId: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column(() => UserCourseProgress)
    progress: UserCourseProgress[]
}