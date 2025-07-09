import { Elysia } from "elysia";
import { authController } from "./modules/auth";

const app = 
  new Elysia()
  .use(authController)
  .get("/health", () => "Healthy")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
