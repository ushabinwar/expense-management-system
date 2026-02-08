import React, { useEffect } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom'
import Table from '../components/Table';
import { asyncAllIncome, asyncIncomeDelete } from '../redux/income/incomeAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Income = () => {
  const dispatch = useDispatch()
  const {incomes} = useSelector((state) => state.income)


  useEffect(() => {
    dispatch(asyncAllIncome());
  }, [dispatch]);

  const handleDelete = async (id) => {
    console.log(id)
    console.log("hey")
    try{
      await dispatch(asyncIncomeDelete(id))
      toast.success("Expense Deleted Successfully")
    }catch(error){
      console.error(error)
      toast.error(error?.response?.data?.message)
    }
  
  }

  const incomeColumns = [
      { header: "Title", accessor: "title" },
      { header: "Amount", accessor: "amount" },
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
            // onClick={()=>{navigate(`update/${row._id}`, { state: row })}}
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
  return (
    <div className='py-3'>
    <Link to="/income/create" className='flex items-center gap-2'>
      <IoIosAddCircleOutline size='25' color='green' />
      <h1 className='font-medium'>Add Income</h1>

    </Link>

    <div className=' '>
      <Table
        columns={incomeColumns}
        data={incomes}
      />
    </div>
  </div>
  )
}

export default Income