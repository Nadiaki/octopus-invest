import { AppDataSource } from "../database/data-source";
import { User } from "../entity";

export class UserService {
    private userRepository = AppDataSource.getRepository(User)

    public async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    public async getUserById(userId: number): Promise<User | null> {
        return this.userRepository.findOneBy({
            userId,
          })
    }
}