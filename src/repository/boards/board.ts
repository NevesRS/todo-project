import { boards } from "../../infrastructure/db/schemas";
import { db } from "../../infrastructure/migrate";
import type { BoardInterface } from "../../model/boards/board";
import type { UserInterface } from "../../model/user/user";

export class BoardRepository {
    async createBoard(board: BoardInterface, owner: UserInterface): Promise<void> {
        await db.insert(boards).values({
            ownerId: owner.id,
            name: board.name,
        });
    }
}
