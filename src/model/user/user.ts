export interface UserInterface {
    nickname: string;
    password: string;
}

export class User implements UserInterface {
    nickname: string;
    password: string;

    constructor(nickname: string, password: string) {
        this.nickname = nickname;
        this.password = password;
    }
}
