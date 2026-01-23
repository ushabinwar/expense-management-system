import React, { useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdLock } from "react-icons/md";
import { signUp } from '../../../services/userService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Register = ({setIsSignup}) => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email, 
      password
    }
    console.log("given data:", data)
    try{
      const response = await signUp(data)
      toast.success("User Created Successfully")
      navigate("/dashboard")
      

    }catch(error){
      toast.error(error.response.data.message)
      console.error("error in sighup:", error)

    }
  }

  return (
    <div className="w-full px-8 md:px-10">
    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

    <div className='flex gap-3 items-center w-full mb-3 px-3 py-2  bg-white text-gray-800 placeholder-gray-400 '>
      <IoPersonSharp color='gray' />
      <input 
        type="text"
        className="
          w-full
          bg-transparent
          text-sm
          outline-none
          border-none
          focus:outline-none
          focus:ring-0
        "
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
    <div className='flex gap-3 items-center w-full mb-3 px-3 py-2  bg-white text-gray-800 placeholder-gray-400 '>
      <HiOutlineMail color='gray' />
      <input 
        type="text"
        className="
          w-full
          bg-transparent
          text-sm
          outline-none
          border-none
          focus:outline-none
          focus:ring-0
        "
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
    </div>
    <div className='flex gap-3 items-center w-full mb-3 px-3 py-2  bg-white text-gray-800 placeholder-gray-400 '>
      <MdLock color='gray'/>
      <input 
        type="password"
        className="
          w-full
          bg-transparent
          text-sm
          outline-none
          border-none
          focus:outline-none
          focus:ring-0
        "
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
    </div>

    <button onClick={submitHandler} className="  mx-auto block px-7 bg-[#3eb1a1] text-sm font-normal text-white py-2 rounded-3xl mt-5 mb-4">
      Sign Up
    </button>

    {/* Mobile only */}
    <p className="md:hidden text-sm text-center">
      Already have an account?{" "}
      <span
        onClick={() => setIsSignup(false)}
        className="text-indigo-600 font-semibold cursor-pointer"
      >
        Login
      </span>
    </p>
  </div>
  )
}

export default Register