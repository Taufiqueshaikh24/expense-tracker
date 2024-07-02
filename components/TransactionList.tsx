
import getTransaction from "@/actions/getTransaction"
import TransactionItem from "./Transactions";

const TransactionList = async () => {

    const {transactions , error} = await getTransaction();


    if(error){
          return <p className="error">{error}</p>
    }

       interface Transaction {
             id?:string,
             text?:string,
             amount?:number,
             userId?:string
             createdAt?:Date
       }

        return (
              <>
              <h3>History</h3>
              <ul className="list">
                 {transactions && transactions.map((transactions:Transaction) => (
                        <TransactionItem transaction={transactions} key={transactions.id} />
                 ) )}
              </ul>
              </>
        )
}

export default TransactionList;