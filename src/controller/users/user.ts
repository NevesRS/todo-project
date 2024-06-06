import Elysia, { t } from "elysia";
import { UserRepository } from "../../repository/users/user";
import { UserService } from "../../service/user/user"

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export const userRoute = new Elysia()
    .post("/users", async ({ body }) => {
    const { nickname, password } = body;
    userService.createUser(nickname, password);
},{
    body: t.Object({
        nickname: t.String(),
        password: t.String()
    })
})
