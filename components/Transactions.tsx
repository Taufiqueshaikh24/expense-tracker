'use client'
import addComas from "@/lib/addComas";
import { toast } from "react-toastify";
import deleteTransaction from "@/actions/deleteTransaction";

interface Transaction {
    id?:string,
    text?:string,
    amount?:number,
    userId?:string
    createdAt?:Date
}


const TransactionItem = async ({transaction}:{transactions:Transaction}) => {
    

    const handleDelete = async (transactionId:string) => {
                const confirmed  = window.confirm('Are you sure to delete?')
                if(!confirmed) return ;

                const {message , error } = await deleteTransaction(transactionId)

                if(error){ toast.error}

                toast.success(message)
    }
  
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}
                  <span>
                     {sign}{addComas(Math.abs(transaction.amount))}
                  </span>
                  <button className="delete-btn" onClick={() => handleDelete(transaction.id)} >x</button>
            </li>        
    )
}

export default TransactionItem;