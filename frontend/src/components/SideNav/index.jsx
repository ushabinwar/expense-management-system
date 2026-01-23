import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return (
    <div className="w-64 h-screen bg-[#3eb1a1] text-white p-4">
      <h2 className="text-xl font-bold mb-6">Expense App</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard" className={({isActive})=> `p-2 rounded ${isActive ? 'bg-[#76e8d6]' : 'hover:bg-[#76e8d6]'}`}>
          Dashboard
        </NavLink>

        <NavLink to="/expense" className={({isActive})=> `p-2 rounded ${isActive ? 'bg-[#76e8d6]' : 'hover:bg-[#76e8d6]'}`}>
          Expense
        </NavLink>

        <NavLink to="/income" className={({isActive})=> `p-2 rounded ${isActive ? 'bg-[#76e8d6]' : 'hover:bg-[#76e8d6]'}`}>
          Income
        </NavLink>

        <NavLink to="/reports" className={({isActive})=> `p-2 rounded ${isActive ? 'bg-[#76e8d6]' : 'hover:bg-[#76e8d6]'}`}>
          Reports
        </NavLink>
      </nav>
    </div>
  )
}

export default SideNav;