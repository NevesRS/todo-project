export interface CardInterface {
    description: string;
    marked: boolean;
}

export class Card implements CardInterface {
    description: string;
    marked: boolean;

    constructor(description: string) {
        this.description = description;
        this.marked = false;
    }
}
