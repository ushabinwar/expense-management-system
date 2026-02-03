import React, { useEffect, useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import Table from '../Table';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { getAllExpense } from '../../services/expenseService';

const Expense = () => {
  const [data, setData] = useState([])

  console.log("datastds:", data)
  const expenseColumns = [
    { header: "Title", accessor: "title" },
    { header: "Amount", accessor: "amount" },
    { header: "Category", accessor: "category" },
    { header: "Description", accessor: "description" }, 
    { header: "Date",
      accessor: "date" ,
      render: (row) => {
        console.log(row)
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
          <MdDelete size={18} />
        </button>
      </div>
      )
    }
    
  ];

   const expenseData = [
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Food",
      amount: 250,
      category: "Daily",
      date: "20 Jan 2026",
    },
    {
      title: "Travel",
      amount: 1200,
      category: "Transport",
      date: "21 Jan 2026",
    },
    {
      title: "Travel",
      amount: 1200,
      category: "Transport",
      date: "21 Jan 2026",
    },
  ];


  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await getAllExpense()
        setData(res?.allExpenses)
      }catch(error){
        console.error(error)
      }

    }
    fetchData();
  }, [])
  

  return (
  <div className='py-3'>
    <Link to="/expense/create" className='flex items-center gap-2'>
      <IoIosAddCircleOutline size='25' color='green' />
      <h1 className='font-medium'>Add Expense</h1>

    </Link>

    <div className='bg-red-500 '>
      <Table
        columns={expenseColumns}
        data={data}
      />
    </div>
  </div>
  )
}

export default Expense;