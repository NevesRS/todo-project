import { Elysia } from "elysia";
import { userRoute } from "./controller/users/user";
import { boardRoute } from "./controller/boards/board";

const app = new Elysia()
.use(userRoute)
.use(boardRoute)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
