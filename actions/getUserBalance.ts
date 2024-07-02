'use server';
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";


export default async function getUserBalance():Promise<{
      balance?:number
      error?:string

}>{

        const {userId} = auth();

        if(!userId){
            return {error:'User not Found'}
        }

       try {
        const transaction = await db.transaction.findMany({
            where:{userId}
      })

      const balance = transaction.reduce((acc , transaction) => acc + transaction.amount , 0);

      return {balance}

       } catch (error) {
            return {
                error:'Database error'
            }        
       }


}