import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const Expense = () => {
  return (
  <div className='py-3'>
    <Link to="/expense/create" className='flex items-center gap-2'>
      <IoIosAddCircleOutline size='25' color='green' />
      <h1 className='font-medium'>Add Expense</h1>

    </Link>
  </div>
  )
}

export default Expense;