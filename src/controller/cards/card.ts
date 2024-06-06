import Elysia, { t } from "elysia";

import { db } from "../../infrastructure/migrate";
import { boards } from "../../infrastructure/db/schemas";
import { eq } from "drizzle-orm";
import { CardRepository } from "../../repository/cards/card";
import { Card } from "../../model/cards/card";

const cardRepository = new CardRepository();

export const cardRoute = new Elysia()
    .post("boards/createCards", async ({ body }) => {
    const { description, board} = body;
    const newCard = new Card(description);
    const [selectedBoard] = await db.select().from(boards).where(eq(boards.id, board))
    cardRepository.createCard(newCard, selectedBoard);
},{
    body: t.Object({
        description: t.String(),
        board: t.String()
    })
})
