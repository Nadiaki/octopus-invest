import { AppDataSource } from "../database/data-source";
import { Course } from "../entity";

export class CourseService {
    private courseRepository = AppDataSource.getRepository(Course)

    public async getAllCourses(): Promise<Course[]> {
        return this.courseRepository.find();
    }
}

