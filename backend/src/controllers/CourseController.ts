import { CourseService } from "../services/course.service";
import { UserService } from "../services/user.service";
import { UserCourseDetails, StartedCourse } from "../types";
import { Course } from "../entity";

export class Coursecontroller {
    private courseService: CourseService;
    private userService: UserService;

    constructor() {
        this.courseService = new CourseService();
        this.userService = new UserService();
    }

    public async getUserCourseDetails(userId: number): Promise<UserCourseDetails | null> {
        const user = await this.userService.getUserById(userId);

        if (!user) {
            return null;
        }

        const startedCourses: StartedCourse[] = [];
        const otherCourses: Course[] = [];

        const allCourses = await this.courseService.getAllCourses();

        for (const course of allCourses) {
            const userProgress = user.progress.find(p => p.courseId === course.courseId);
            if (userProgress){
                const startedCourse: StartedCourse = {
                    course,
                    completionPercentage: (userProgress.completedLessons / userProgress.totalLessons) * 100
                }
                startedCourses.push(startedCourse);
            } else {
                otherCourses.push(course);
            }
        }

        const response: UserCourseDetails = {
            userId: user.userId,
            startedCourses,
            otherCourses
        }

        return response;
    }
} 