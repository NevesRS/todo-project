export interface UserInterface {
    id: string | null;
    nickname: string;
    password: string;
}

export class User implements UserInterface {
    id: string | null;
    nickname: string;
    password: string;

    constructor(nickname: string, password: string) {
        this.id = "";
        this.nickname = nickname;
        this.password = password;
    }
}
