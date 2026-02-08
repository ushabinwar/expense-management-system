import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../utils/helper';
import { asyncUpdateIncome } from '../redux/income/incomeAction';


const UpdateExpense = () => {
  const location = useLocation();
  console.log("loc data:", location?.state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState(location?.state?.title || " ")
  const [amount, setAmount] = useState(location?.state?.amount || 0)
  const [description, setDescription] = useState(location?.state?.description || " ")
  const [date, setDate] = useState(
    location?.state?.date ? formatDate(location.state.date) : ""
  );




  const submitHandler = async(e) =>{
    e.preventDefault()
    if (!title || !amount) {
      return toast.error("Fill all the required details");
    }
    const payload = {
        title,
        amount,
        description, 
        date
    }
    try{
        const response = await dispatch(asyncUpdateIncome(payload, location?.state?._id))
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
            <h1 className='font-medium'>Update Income</h1>
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
                <button onClick={(e)=>submitHandler(e)} className='btn'>
                    Update Income
                </button>
            </form>
        </div>

    </div>
  )
}

export default UpdateExpense;