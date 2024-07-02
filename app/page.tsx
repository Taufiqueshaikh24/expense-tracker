
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import AddTransaction from "@/components/AddTransaction";
import AddBalance from "@/components/AddBalance";
import IncomeExpenses from "@/components/IncomeExpenses";
import TransactionList from "@/components/TransactionList";
const Homepage = async () => {
  const user = await currentUser();
     return (
          <main>
            <SignedIn>
            <h1 style={{margin:'0 0 10px 0 '}} >Welcome , {user?.firstName}</h1>
            </SignedIn>
            <AddBalance />
            <IncomeExpenses />
            <AddTransaction />
            <TransactionList />
          </main>
     )
     
}

export default Homepage;
