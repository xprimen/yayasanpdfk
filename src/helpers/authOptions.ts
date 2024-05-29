import { UserModel } from "../types";
import { DefaultSession, type AuthOptions, type Session } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      role: string;
      username: string;
      name: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    id: string;
    role: string;
    username: string;
    name: string | null;
  }
}

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  //   providers: [
  //     GoogleProvider({
  //       clientId: process.env.FIREBASE_CLIENT_ID || "",
  //       clientSecret: process.env.FIREBASE_CLIENT_SECRET || "",
  //       profile(profile) {
  //         return {
  //           id: profile.sub,
  //           name: profile.name,
  //           email: profile.email,
  //           image: profile.picture,
  //           emailVerified: null,
  //           nomorTlp: "",
  //           role: "user",
  //           alamat: null,
  //           kelurahan: null,
  //           kecamatan: null,
  //           kokab: null,
  //           provinsi: null,
  //           createdDate: Date.now(),
  //           updatedDate: Date.now(),
  //           deletedDate: null,
  //         };
  //       },
  //     }),
  //   ],
  //   adapter: FirestoreAdapter({
  //     credential: cert(String(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
  //   }),
  callbacks: {
    jwt({ token, user, session, trigger }) {
      // console.log("CALLBACKS JWT token :", token);
      // console.log("CALLBACKS JWT account :", account);
      // console.log("CALLBACKS JWT profile :", profile);
      // console.log("CALLBACKS JWT user :", user);
      // console.log("CALLBACKS JWT trigger :", trigger);
      if (trigger === "update") {
        // console.log("CALLBACKS JWT session :", session);
        const newSession = session as Session["user"];
        // return {
        //   ...token,
        //   name: session?.name,
        // };
        // token.name = newSession.name;
        token = {
          ...token,
          name: newSession?.name,
        };
      }
      if (user) {
        return {
          ...token,
          // username: user.username,
          ...user,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      // console.log("CALLBACKS Session token :", token);
      // console.log("CALLBACKS Session user :", user);
      // console.log("CALLBACKS Session session :", session);
      // console.log("CALLBACKS Session newSession :", newSession);
      // console.log("CALLBACKS Session trigger :", trigger);
      // const name = session.user ? session.user : token.name;
      return {
        ...session,
        user: {
          // ...token,
          ...session.user,
          name: token.name,
          username: token.username,
          role: token.role,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: "/signIn",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60,
    // updateAge: 24 * 60 * 60,
    // maxAge: 3 * 60,
    // updateAge: 2 * 60,
  },
  providers: [
    CredentialsProvider({
      id: "fklogin",
      name: "Login Secure System",
      credentials: {
        username: { type: "text", label: "Username" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw Error("Username dan Password Wajib Diisi!!!");
        }
        const loginCheck = UserModel.pick({
          username: true,
          password: true,
        }).safeParse(credentials);
        if (!loginCheck.success) {
          throw Error("Username dan Password Wajib Diisi!!!");
        }

        if (
          credentials.username !== "admin" &&
          credentials.password !== "admin"
        ) {
          throw Error("Cek Kembali Data Login Anda");
        }
        return {
          id: "1234-5678",
          username: "admin",
          role: "superadmin",
          name: "Engga",
        };
        /* const loginCheck = UserModel.pick({
          username: true,
          password: true,
        }).safeParse(credentials);
        if (!loginCheck.success) {
          // return null;
          throw Error("Username dan Password Wajib Diisi");
        }
        // Add logic here to look up the user from the credentials supplied
        const existingUser = await db.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!existingUser) {
          // If you return null then an error will be displayed advising the user to check their details.
          throw Error("Cek Kembali Data Login Anda");

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

        console.log(existingUser);

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          throw Error("Cek Kembali Data Login Anda");
        }

        if (!existingUser.active) {
          throw Error(
            "Akun Anda Belum di Aktivasi. Silahkan Hubungi Nomor WhatsApp Admin di 0852-6806-8200"
          );
        }
        // Any object returned will be saved in `user` property of the JWT
        return {
          id: existingUser.id + "",
          username: credentials?.username,
          role: existingUser.roleId,
          name: existingUser.name,
        }; */
      },
    }),
  ],
};
