import type { UserRepository } from "../../repository/users/user";

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(nickname: string, password: string): Promise<void> {
        this.userRepository.createUser(nickname, password);
    }
}
