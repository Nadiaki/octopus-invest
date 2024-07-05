import { Entity, ObjectIdColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Course extends BaseEntity {

    @ObjectIdColumn()
    id: number

    @Column()
    courseId: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    lessons: number

    @Column()
    time: number

    @Column()
    likes: number

    @Column()
    image: string

}
