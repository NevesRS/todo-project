import Elysia, { t } from "elysia";
import { UserRepository } from "../../repository/users/user";
import { User } from "../../model/user/user";

const userRepository = new UserRepository();

export const userRoute = new Elysia()
    .post("/users", async ({ body }) => {
    const { nickname, password } = body;
    const newUser = new User(nickname, password);
    userRepository.createUser(newUser);
},{
    body: t.Object({
        nickname: t.String(),
        password: t.String()
    })
})
