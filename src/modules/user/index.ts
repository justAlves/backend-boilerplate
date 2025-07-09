import { User } from "better-auth/*";
import Elysia from "elysia";

export const userController = new Elysia({ name: "user"})
  .decorate("user", null as unknown as User)
  .get("/me", ({ user }) => user, {
    auth: true
  })