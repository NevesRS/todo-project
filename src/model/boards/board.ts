export interface BoardInterface {
    id: string;
    name: string;
}

export class Board implements BoardInterface {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = "";
        this.name = name;
    }
}
