import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, Session, User as NextAuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Extend the Session and User types to include the role property
declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

interface CustomUser extends NextAuthUser {
  role?: string | null;
}

// Configuration options for authentication
export const authOptions = {
  // Callback to modify the session object
  callbacks: {
    session: async ({ session }: { session: Session; user: CustomUser }) => {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user?.email || "" },
      });

      if (dbUser) {
        if (session.user) {
          session.user.role = dbUser.role;
        }
      }

      return session;
    },
  },

  // Prisma adapter to connect NextAuth.js with the database
  adapter: PrismaAdapter(prisma),

  // Authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};

// Utility function to retrieve the server session with authentication options
export const getServerAuthSession = () => getServerSession(authOptions);
