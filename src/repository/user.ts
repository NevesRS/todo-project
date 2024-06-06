import { users } from "../infrastructure/db/schemas";
import { db } from "../infrastructure/migrate";
import type { UserInterface } from "../model/user/user";

export class UserRepository {
    async createUser(user: UserInterface): Promise<void> {
        await db.insert(users).values({
            password: user.password,
            nickname: user.nickname
        });
    }
}
