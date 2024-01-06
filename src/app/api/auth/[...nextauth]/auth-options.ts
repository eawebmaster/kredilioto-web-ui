import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/env.mjs";
import isEqual from "lodash/isEqual";
import { pagesOptions } from "./pages-options";
import route from "@/lib/route";

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    signIn: route.login,
    error: route.login,
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.idToken as string,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        // return user as JWT
        token.user = user;
      }
      return token;
    },
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          const res = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            console.log(res);
            // credentials are invalid
            return null;
          }

          const parsedResponse = await res.json();

          // accessing the jwt returned by server
          const jwt = parsedResponse.token;

          // You can make more request to get other information about the user eg. Profile details

          // return user credentials together with jwt
          return {
            ...credentials,
            jwt,
          };
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID || "",
      clientSecret: env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};
