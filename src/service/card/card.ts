import type { BoardInterface } from "../../model/boards/board";
import type { CardInterface } from "../../model/cards/card";
import type { CardRepository } from "../../repository/cards/card";

export class CardService {
    constructor(private cardRepository: CardRepository) {}

    async createUser(card: CardInterface, board: BoardInterface): Promise<void> {
        this.cardRepository.createCard(card, board);
    }
}
