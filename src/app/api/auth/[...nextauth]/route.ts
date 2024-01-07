import axiosInterceptorInstance from "@/hooks/use-axios";
import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
// import { authOptions } from './auth-options';
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (credentials) {
            const { data } = await axiosInterceptorInstance.post(
              "/auth/login",
              {
                email: credentials.email,
                password: credentials.password,
              }
            );

            if (data) {
              return { ...data.user, token: data.token };
            }
          }
        } catch (error) {
          console.log(error, "error");
          console.error("Error during authorization:", error);
        }

        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token, user }) {

      //   const sanitizedToken = Object.keys(token).reduce((p, c) => {
      //     // strip unnecessary properties
      //     if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
      //       return { ...p, [c]: token[c] };
      //     } else {
      //       console.log(c, "c");
      //       return p;
      //     }
      //   }, {});
      //   return { ...session, user: sanitizedToken, apiToken: token.apiToken };
      return { ...session, user: token, token: token.token };
    },
    async jwt({ token, user, account, profile }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as any;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
