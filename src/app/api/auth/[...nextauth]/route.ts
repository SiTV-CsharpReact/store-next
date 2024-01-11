import { users } from "@/helper/constants";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "username", type: "text", placeholder: "Enter your email address" },
        password: { label: "password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("https://localhost:2210/api/account/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        
        const user = await res.json();

        if (res.ok && user) {
          return user; // Đăng nhập thành công
        } else {
          throw new Error('Đăng nhập không thành công');
        }
        // if(!credentials || !credentials.email || !credentials.password){
        //     return null;
        //     /* The line `const user =users.find((item)=> item.email === credentials.email);` is
        //     attempting to find a user in the `users` array whose email matches the email provided in
        //     the `credentials` object. */
       
        // }
        // const user =users.find((item)=> item.email === credentials.email);
        // if(user?.password === credentials.password){
        //     return user;
        // }
        // return null
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Add any additional NextAuth configuration here
};

const handler = NextAuth(authOptions);

export { handler as GET,handler as POST };
