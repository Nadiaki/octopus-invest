import { Entity, Column, BaseEntity } from "typeorm"

@Entity()
export class UserCourseProgress extends BaseEntity {
    @Column()
    courseId: number

    @Column()
    completedLessons: number

    @Column()
    totalLessons: number
}