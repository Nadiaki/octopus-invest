import { MigrationInterface } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../../entity";

const user = {
  userId: 1,
  firstName: 'Jane',
  lastName: 'Doe',
    progress: [
      { courseId: 1, completedLessons: 1, totalLessons: 10 },
      { courseId: 2, completedLessons: 2, totalLessons: 8 },
      { courseId: 3, completedLessons: 3, totalLessons: 5 }
    ]
  };

export class SeedUsers1720201412646 implements MigrationInterface {
    userRepository = AppDataSource.getRepository(User);

    public async up(): Promise<void> {

        // Check if the collection is already populated to prevent duplicates
        const existingUsers = await this.userRepository.find();
        if (existingUsers.length === 0) {
            await this.userRepository.save(user);
            console.log('Users seeded successfully');
          } else {
            console.log('Users already exist in the database');
        }
    }

    public async down(): Promise<void> {
        await this.userRepository.clear();
        console.log('Users removed successfully');
    }

}
