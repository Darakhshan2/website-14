"use client"
import React from 'react';

import { MdArrowDropDown } from "react-icons/md";

import { IoMdSearch } from "react-icons/io";
import { useRouter } from 'next/navigation';


export default function HeaderTop() {
  const Route = useRouter()
  return (
    <>
    <div className='bg-black text-white flex align-middle justify-center p-1  '>
    <div className='flex'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <p className='ml-6 underline cursor-pointer'>ShopNow </p> <p className='ml-32 flex'> English <MdArrowDropDown className='mt-1' />
           </p>
           </div>
    </div>
    <div className='text-black bg-white flex justify-between  pl-10 pr-6 overflow-hidden'>
    <h1 className='text-3xl pt-3 pl-5'>Exclusive</h1>
        <div>
            <ul className='flex mt-5 space-x-12 align-middle cursor-pointer'>
            <li onClick={()=>Route.push("/")} >Home</li>
            <li onClick={()=>Route.push("/components/contact")} >Contact</li>
            <li onClick={()=>Route.push("/components/about")}>About</li>
            <li onClick={()=>Route.push("/components/mainHead")}>Sign up</li>
            </ul>
        </div>
        <div className='bg-slate-200 mr-4 pl-2 mb-2 pr-2 pt-1 mt-1 flex rounded-md'>
        <div className='flex'>
        <input type="text" className='bg-slate-200 p-1 m-1 focus:outline-none' placeholder='What are you looking for ?' /> 
        </div>
        <p className='pl-3 pt-2 text-2xl '><IoMdSearch /></p> 
        </div>
    </div>
    </>
  )
}