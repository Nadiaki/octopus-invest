import { Course } from "../entity";

export type UserCourseDetails  = {
    userId: number;
    otherCourses: Course[];
    startedCourses: StartedCourse[];
}

export type StartedCourse = {
    course: Course,
    completionPercentage: number;
}