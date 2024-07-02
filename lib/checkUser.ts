import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


export const checkUser = async () => {
       const user = await currentUser();
       console.log(user)

       if(!user){ return null ; }

       const loggedInuser = await db.user.findUnique({
               where: {
                    clerkUserId:user.id
               }
       })

       if(loggedInuser){
              return loggedInuser;
       }

       const newUser = await db.user.create({
                data:{
                      clerkUserId:user.id, 
                      name : `${user.firstName} ${user.lastName}`,
                      imageUrl:user.imageUrl,
                      email:user.emailAddresses[0].emailAddress
                }

       })
       return newUser;
}