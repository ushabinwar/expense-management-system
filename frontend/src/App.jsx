import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Authentication'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import SideNav from './components/SideNav'
import Dashboard from './components/Dashboard'
import Expense from './components/Expense'
import DashboardLayout from './components/Layouts/DashboardLayout'
import Nav from './components/Nav'
import CreateExpense from './components/Expense/CreateExpense'
import ProtectedRoute from './components/Authentication/ProtectedRoute'
import UpdateExpense from './components/Expense/UpdateExpense'

function App() {
  return(
    <div>
      <ToastContainer />      
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Auth />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
      
          <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/expense">
              <Route index element={<Expense />} />
              <Route path="create" element={<CreateExpense />} />
              <Route path="update/:id" element={<UpdateExpense />} />
            </Route>

          </Route>
        </Route>
      </Routes>

    </div>

  )
  
}

export default App;