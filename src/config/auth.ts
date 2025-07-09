import { betterAuth } from "better-auth";
import { admin, organization } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "./db"; // your drizzle instance
 
export const auth = betterAuth({
  database: drizzleAdapter(drizzle, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    }
  },
  plugins: [
    admin(),
    organization(),
  ],  
});