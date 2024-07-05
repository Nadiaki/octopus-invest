import { Request, Response } from "express";
import { CourseService } from "../services/course.service";

export class Coursecontroller {
    private courseService: CourseService;

    constructor() {
        this.courseService = new CourseService();
    }
    
    public getAllCourses = async(req: Request, res: Response): Promise<void> => {
        try {
            const courses = await this.courseService.getAllCourses();
            console.log(courses);
            res.json(courses);
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                message: err.message
            });
        }
    }

} 