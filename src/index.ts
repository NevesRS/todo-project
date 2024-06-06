import { Elysia } from "elysia";
import { userRoute } from "./controller/users/user";

const app = new Elysia().use(userRoute).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
