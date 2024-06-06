import { Elysia } from "elysia";
import { userRoute } from "./controller/users/user";
import { boardRoute } from "./controller/boards/board";
import { cardRoute } from "./controller/cards/card";

const app = new Elysia()
.use(userRoute)
.use(boardRoute)
.use(cardRoute)
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
