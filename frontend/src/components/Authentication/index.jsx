import React, { useState } from 'react'
import Register from './Register';
import Login from './Login';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  console.log("issig:",isSignup)

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* MAIN CARD */}
      <div className="relative w-full max-w-[800px] h-[480px] md:h-[450px]  rounded-xl overflow-hidden shadow-lg">

        {/* FORMS */}
        {/* <div
          className={`absolute inset-0 bg-green-300 md:w-1/2 flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${isSignup ? "opacity-0 scale-95 md:opacity-100 md:scale-100 md:translate-x-full" : ""}`}
        > */}
        <div
          className={`absolute inset-0 md:w-1/2 flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${isSignup
            ? "opacity-0 scale-95 translate-x-0 md:translate-x-full pointer-events-none"
            : "opacity-100 scale-100 translate-x-0 pointer-events-auto"
          }`}
       >
          <Login setIsSignup={setIsSignup} />
        </div>

        {/* <div
          className={`absolute inset-0 bg-pink-500 md:w-1/2 flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${isSignup ? "opacity-100 scale-100 md:translate-x-full" : "opacity-0 scale-95 md:opacity-100 md:scale-100 md:translate-x-0"}`}
        > */}
        <div
          className={`absolute inset-0 md:w-1/2 flex items-center justify-center
          transition-all duration-700 ease-in-out
          ${isSignup ? "opacity-100 scale-100 translate-x-0 md:translate-x-full pointer-events-auto": "opacity-0 scale-95 translate-x-0 pointer-events-none"}`}
        >

          <Register setIsSignup={setIsSignup} />
        </div>

        {/* WELCOME PANEL (DESKTOP ONLY) */}
        <div
          className={`hidden md:flex absolute right-0 top-0 w-1/2 h-full bg-[#3EB1A1] text-white
          flex-col items-center justify-center transition-all duration-700
          ${isSignup ? "-translate-x-full" : ""}`}
        >
          {!isSignup ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Hello Friend!</h2>
              <p className="mb-6 text-center px-6">
                New here? Create an account
              </p>
              <button
                onClick={() => setIsSignup(true)}
                className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-6">Already have an account?</p>
              <button
                onClick={() => setIsSignup(false)}
                className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Auth