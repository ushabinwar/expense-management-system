import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import Table from '../Table';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { deleteExpense, getAllExpense } from '../../services/expenseService';
import { useDispatch, useSelector } from 'react-redux';
import { allExpense, expenseDelete } from '../../redux/expense/expenseAction';
import { toast } from 'react-toastify';

const Expense = () => {
  const dispatch = useDispatch()
  // const [data, setData] = useState([])
  const { expenses } = useSelector((state) => state.expense);

  const expenseColumns = [
    { header: "Title", accessor: "title" },
    { header: "Amount", accessor: "amount" },
    { header: "Category", accessor: "category" },
    { header: "Description", accessor: "description" }, 
    { header: "Date",
      accessor: "date" ,
      render: (row) => {
        const date = new Date(row.date);
        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      },
    },
    {
    header: "Action",
    render: (row) => (
      <div className="flex gap-3 justify-center">
        {/* Edit */}
        <button
          onClick={() => handleEdit(row)}
          className="text-blue-600 hover:text-blue-800"
        >
          <MdEdit size={18} />
        </button>

        {/* Delete */}
        <button
          onClick={() => handleDelete(row._id)}
          className="text-red-600 hover:text-red-800"
        >
          <MdDelete size={18}/>
        </button>
      </div>
      )
    }
    
  ];

   

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try{
  //       const res = await getAllExpense()
  //       setData(res?.allExpenses)
  //     }catch(error){
  //       console.error(error)
  //     }

  //   }
  //   fetchData();
  // }, [])

  useEffect(() => {
    dispatch(allExpense());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try{
      await dispatch(expenseDelete(id))
      toast.success("Deleted Successfully")
    }catch(error){
      console.error(error)
      toast.error(error?.response?.data?.message)
    }

  }
  

  return (
  <div className='py-3'>
    <Link to="/expense/create" className='flex items-center gap-2'>
      <IoIosAddCircleOutline size='25' color='green' />
      <h1 className='font-medium'>Add Expense</h1>

    </Link>

    <div className=' '>
      <Table
        columns={expenseColumns}
        data={expenses}
      />
    </div>
  </div>
  )
}

export default Expense;