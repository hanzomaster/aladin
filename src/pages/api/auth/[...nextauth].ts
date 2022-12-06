import { prisma } from "@db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { env } from "../../../env/server.mjs";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  events: {
    createUser: async (message) => {
      await prisma.cart.create({
        data: {
          userId: message.user.id,
        },
      });
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
      normalizeIdentifier: (identifier) => {
        if (identifier.split("@").length > 2) {
          throw new Error("Only one email allowed");
        }
        return identifier.toLowerCase().trim();
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
};

export default NextAuth(authOptions);
