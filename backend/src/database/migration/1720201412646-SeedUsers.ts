import { MigrationInterface, QueryRunner } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../../entity";

const user = {
    userId: 1,
    progress: [
      { courseId: 1, completedLessons: 1, totalLessons: 10 },
      { courseId: 2, completedLessons: 2, totalLessons: 8 },
      { courseId: 3, completedLessons: 3, totalLessons: 5 }
    ]
  };

export class SeedUsers1720201412646 implements MigrationInterface {
    userRepository = AppDataSource.getRepository(User);

    public async up(queryRunner: QueryRunner): Promise<void> {

        // Check if the collection is already populated to prevent duplicates
        const existingUsers = await this.userRepository.find();
        if (existingUsers.length === 0) {
            for (const user of existingUsers) {
              await this.userRepository.save(user);
            }
            console.log('Courses seeded successfully');
          } else {
            console.log('Courses already exist in the database');
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await this.userRepository.clear();
        console.log('Courses removed successfully');
    }

}
