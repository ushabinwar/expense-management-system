import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createIncome } from '../services/incomeService';
import { toast } from 'react-toastify';


const CreateIncome = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState("")
  const [date, setDate] = useState()
  

  const submitHandler = async(e) =>{
    e.preventDefault()
    if (!title || !amount ) {
      return toast.error("Fill all the required details");
    }
    const payload = {
        title,
        amount,
        description,
        date
    }
    try{
        const response = await createIncome(payload)
        toast.success(response?.message)
        navigate("/income")

    }catch(error){
        toast.error(error?.response?.data?.message)
        console.error(error)
    }
  }

  return (
    <div className='  p-3'>
        <Link to='/expense' className='flex items-center gap-2'>
            <FaArrowLeft size='20' color='green' />
            <h1 className='font-medium'>Add Income</h1>
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
                        placeholder="Title"
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
                    
                </div>
                <div className='flex gap-10 mt-5'>
                    
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
                <button onClick={(e)=>submitHandler(e)}  className='btn'>
                    Create Income
                </button>
            </form>
        </div>

    </div>
  )
}

export default CreateIncome;