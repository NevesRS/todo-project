import type { BoardInterface } from "../../model/boards/board";
import type {  UserInterface } from "../../model/user/user";
import type { BoardRepository } from "../../repository/boards/board";

export class BoardService {
    constructor(private boardRepository: BoardRepository) {}

    async createUser(board: BoardInterface, owner: UserInterface): Promise<void> {
        this.boardRepository.createBoard(board, owner);
    }
}
