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

function App() {
  return(
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Auth />} />
  
        <Route element={<DashboardLayout/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
         
        </Route>
      </Routes>
    </div>

  )
  
}

export default App;