import { db } from "@/lib/db";
import {auth } from '@clerk/nextjs/server';

interface Transaction {
    id?:string,
    text?:string,
    amount?:number,
    userId?:string
    createdAt?:Date
}


export default async function getTransaction():Promise<{

        transactions?:Transaction[]
        error?:string
}>{

      const {userId} = auth();

      if(!userId){
           return {
               error:'User not  found'
           }
      }


      try {
            const transactions = await db.transaction.findMany({
                  where:{userId},
                  orderBy: {
                       createdAt : 'desc'
                  }
            })


            return { transactions }
      } catch (error) {
            return {  error:'Database Error' }
      }



}