import React from 'react'
import { FcGoogle } from "react-icons/fc";


export default function HeadBottom() {
  return (
    <>
    <div className='pl-28 flex  h-full  bg-white'>
        <img className='w-2/5 '  src="/signup.jpg"  />
      <div className=' h-2/3 text-center ml-10 w-2/5 pt-8'>
        <h1 className="text-4xl ">Create an account</h1>

        <p className=' font-extralight mr-24 mt-7'>Entre your details below</p>

        <input type="text" className='mt-4 w-72 border-b-2 focus:outline-none' placeholder=' Name :' />
        <br />
        <input type="text" className='mt-6 w-72 border-b-2 focus:outline-none' placeholder=' Email or Phone Number :' />
        <br />
        <input type="password" className='mt-6 w-72 border-b-2 focus:outline-none' placeholder=' Password :' />
        <br />
        <button className='mt-7 font-serif border-2 p-2 w-2/5 bg-red-600 transition duration-300 ease-in hover:bg-gray-800 border-none text-white'>Create Account</button>
        <br />
          <div className='flex justify-center mt-6  bg-white'> 
            <button className='font-serif  border-2 flex items-center justify-center mb-8 p-2'>
              <FcGoogle className=' mr-3 text-2xl' />
              Sign up with Google
            </button>
          </div>  
      </div>
    </div>
    </>
  )
}
