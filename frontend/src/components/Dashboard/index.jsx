import React from 'react'
import SideNav from '../SideNav'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { expenses } = useSelector((state) => state.expense);
  return (
    <>
      <div className='w-full h-full]'>Dashboard</div>
    </>
  )
}

export default Dashboard