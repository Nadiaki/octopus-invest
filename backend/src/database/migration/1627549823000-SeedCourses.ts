import { MigrationInterface } from "typeorm";
import { AppDataSource } from "../data-source";
import { Course } from "../../entity/Course";

const courses = [
  { title: 'Intro to Investing', author: 'Author 1', lessons: 10, time: 14, likes: 100, image: '/images/book.jpg' },
  { title: 'Propel Your Career', author: 'Author 2', lessons: 8, time: 12, likes: 200, image: '/images/book.jpg' },
  { title: 'Advanced Stock Trading', author: 'Author 3', lessons: 5, time: 12, likes: 150, image: '/images/book.jpg' },
  { title: 'Personal Finance Management', author: 'Author 4', lessons: 3, time: 17, likes: 180, image: '/images/book.jpg' },
  { title: 'Understanding Cryptocurrency', author: 'Author 5', lessons: 4, time: 12, likes: 220, image: '/images/book.jpg' },
  { title: 'Retirement Planning', author: 'Author 6', lessons: 2, time: 12, likes: 90, image: '/images/book.jpg' },
  { title: 'Investment Strategies for Beginners', author: 'Author 7', lessons: 3, time: 18, likes: 130, image: '/images/book.jpg' },
  { title: 'Financial Market Analysis', author: 'Author 8', lessons: 4, time: 12, likes: 175, image: '/images/book.jpg' },
  { title: 'Real Estate Investing', author: 'Author 9', lessons: 5, time: 11, likes: 210, image: '/images/book.jpg' },
  { title: 'Risk Management in Finance', author: 'Author 10', lessons: 3, time: 12, likes: 140, image: '/images/book.jpg' },
];

export class SeedCourses1627549823000 implements MigrationInterface {
    courseRepository = AppDataSource.getRepository(Course);

    public async up(): Promise<void> {

        // Check if the collection is already populated to prevent duplicates
        const existingCourses = await this.courseRepository.find();
        if (existingCourses.length === 0) {
            for (const course of existingCourses) {
              await this.courseRepository.save(course);
            }
            console.log('Courses seeded successfully');
          } else {
            console.log('Courses already exist in the database');
        }
    }

    public async down(): Promise<void> {

        await this.courseRepository.clear();
        console.log('Courses removed successfully');
    }
}
