export interface BoardInterface {
    name: string;
}

export class Board implements BoardInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
