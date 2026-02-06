import React, { useEffect } from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom'
import Table from '../components/Table';
import { asyncAllIncome } from '../redux/income/incomeAction';
import { useDispatch, useSelector } from 'react-redux';

const Income = () => {
  const dispatch = useDispatch()
  const {incomes} = useSelector((state) => state.income)

  console.log("redux state:",incomes)

  useEffect(() => {
    dispatch(asyncAllIncome());
  }, [dispatch]);

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
            // onClick={() => handleDelete(row._id)}
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