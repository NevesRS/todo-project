import { cards } from "../../infrastructure/db/schemas";
import { db } from "../../infrastructure/migrate";
import type { BoardInterface } from "../../model/boards/board";
import type { CardInterface } from "../../model/cards/card";


export class CardRepository {
    async createCard(card: CardInterface, board: BoardInterface): Promise<void> {
        await db.insert(cards).values({
            boardId: board.id,
            description: card.description,
            marked: card.marked
        });
    }
}
