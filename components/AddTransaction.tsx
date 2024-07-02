"use client"
import addTransaction from "@/actions/AddTransaction";
import { toast } from "react-toastify";
import { useRef } from "react";


const AddTransaction = () => {

    const formRef  = useRef<HTMLFormElement>(null)

    const clientAction = async (formData:FormData) => {
            
        const {data , error} = await addTransaction(formData);

        if(error){
              toast.error(error)
        }else{
            toast.success('Transaction Added')
            formRef.current?.reset();
            console.log(data);
        }



    };

      return (
        <>
            <h3>Add Transaction</h3>
            <form action={clientAction} ref={formRef} >
                  <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" name="text" placeholder="Enter the text ..." />
                  </div>
                  <div className="form-control">
                <label htmlFor="amount">Amount <br/> (negative - expenses , positive - income)</label>
                <input type="number" id="amount" name="amount" placeholder="Enter the Amount ..." step='0.01' />
                  </div>
                <button type="submit" className="btn" >Add Transaction</button>
            </form>
        </>
      )


}

export default AddTransaction;