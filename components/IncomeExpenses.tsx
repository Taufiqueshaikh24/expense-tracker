
import getExpenses from "@/actions/getExpenses";
import addComas from "@/lib/addComas";

const IncomeExpenses = async () => {

    const { income , expense } = await getExpenses();

        return (
                <div className="inc-exp-container">
                      <div>
                        <h4>Income</h4>
                         <p className="money plus">${addComas(Number(income?.toFixed(2)))}</p>
                      </div>
                      <div>
                         <h4>Expense</h4>
                          <p className="money minus">${addComas(Number(expense?.toFixed(2)))}</p>
                      </div>
                </div>
        )

}

export default IncomeExpenses;