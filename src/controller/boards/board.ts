import Elysia, { t } from "elysia";

import { User } from "../../model/user/user";
import { BoardRepository } from "../../repository/boards/board";
import { Board } from "../../model/boards/board";
import { db } from "../../infrastructure/migrate";
import { users } from "../../infrastructure/db/schemas";
import { eq } from "drizzle-orm";

const boardRepository = new BoardRepository();

export const boardRoute = new Elysia()
    .post("/boards", async ({ body }) => {
    const { name, owner } = body;
    const newBoard = new Board(name);
    const [user] = await db.select().from(users).where(eq(users.nickname, owner))
    boardRepository.createBoard(newBoard, user);
},{
    body: t.Object({
        name: t.String(),
        owner: t.String()
    })
})
