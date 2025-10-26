import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@northridge.app" &&
          credentials?.password === "northridge123"
        ) {
          return { id: "1", name: "Admin", email: "admin@northridge.app" };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
});
export { handler as GET, handler as POST };
