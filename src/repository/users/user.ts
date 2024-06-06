import { users } from "../../infrastructure/db/schemas";
import { db } from "../../infrastructure/migrate";

export class UserRepository {
    async createUser(nickname: string, password: string): Promise<void> {
        await db.insert(users).values({
            password: password,
            nickname: nickname
        });
    }
}
