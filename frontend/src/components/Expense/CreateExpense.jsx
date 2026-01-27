import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { createExpense } from '../../services/expenseService';
import { toast } from 'react-toastify';


const CreateExpense = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [description, setDescription] = useState("")
  const [date, setDate] = useState()
  const categories = [
    { id: 1, name: "Food" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Shopping" },
    { id: 4, name: "Bills" },
    { id: 5, name: "Rent" },
    { id: 6, name: "Health" },
    { id: 7, name: "Education" },
    { id: 8, name: "Entertainment" },
    { id: 9, name: "Other" }

  ];
  
  const paymentMethod = [
    { id: 1, name: "Cash" },
    { id: 2, name: "UPI" },
    { id: 3, name: "Card" },
    { id: 4, name: "NetBanking" } 
  ];

  const submitHandler = async(e) =>{
    e.preventDefault()
    if (!title || !amount || !category || !paymentMode) {
      return toast.error("Fill all the required details");
    }
    const data = {
        title,
        amount,
        category,
        paymentMode,
        description
    }
    try{
        const response = await createExpense(data)
        toast.success(response?.data?.message)

    }catch(error){
        // toast.error(error?.message)
        console.error(error.message)
    }
  }

  return (
    <div className='  p-3'>
        <Link to='/expense' className='flex items-center gap-2'>
            <FaArrowLeft size='20' color='green' />
            <h1 className='font-medium'>Add Expense</h1>
        </Link>

        <div className='mt-5 '>
            <form>
                <div className='flex gap-10'>
                    <div >
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Title
                    </label>
                    <input 
                        type="text"
                        className=" input-field"
                        placeholder="Email"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Amount
                    </label>
                    <input 
                        type="number"
                        className=" input-field"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                    />
                    </div>
                    <div>
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Category
                    </label>
                    <select
                        className="input-field"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>

                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>
                                 {cat.name}
                            </option>
                        ))}
                    </select>

                </div>
                </div>
                <div className='flex gap-10 mt-5'>
                    <div>
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Payment Mode
                    </label>
                    <select
                        className="input-field"
                        value={paymentMode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                    >
                        <option value="">Select Payment Mode</option>
                        {paymentMethod.map((pay) => (
                            <option key={pay.id} value={pay.name}>
                               {pay?.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Description
                    </label>
                    <input 
                        type="text"
                        className=" input-field"
                        placeholder="Description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        

                    />
                </div>
                <div>
                    <label htmlFor="" className='text-medium font-semibold flex '>
                        Date
                    </label>
                    <input 
                        type="date"
                        className=" input-field"
                        placeholder="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        

                    />
                </div>
                </div>
                <button onClick={(e)=>submitHandler(e)} className='btn'>
                    Create Expense
                </button>
            </form>
        </div>

    </div>
  )
}

export default CreateExpense;