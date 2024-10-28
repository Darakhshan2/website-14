import React from 'react'
import { IoCall } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";


export default function Contact() {
  return (
   <>
  <div className=' bg-white h-svh'>
   <div className='bg-white h-96 w-svw pt-12 flex'>
    
      <div className=' h-fit w-80 border-2 shadow-stone-600 shadow-lg  ml-12  p-4'>
        
        <div>
          <div className='flex justify-center text-2xl' > 
             <IoCall className='mt-1 mr-2'/> 
              <h1 className='' >Call To Us</h1>
           </div> 

           <div className=' pt-3 pb-6'>
               <h2>We are available 24/7
                <p> 7 days a week.</p>
                </h2>
             <p>Phone: +2355465566765</p>
            </div>
        </div>
        <div className='w-72 border-t-2  bg-gray-700'></div>

        <div className='pt-4'>
        <div className='text-2xl flex justify-center'>
              
        <TfiWrite className='mt-1 mr-2'/>
          <h1 className='text-center'>Write to us</h1>
          </div>
          <div className='pt-3'>
            <p>
              Fill out our form and we will contact you within 24 hours.
            </p>

            <p className='pt-4 pb-4'>Emails:customer@exclusive.com</p>

            <p>Emails:support@exclusive.com</p>
          </div>
        </div>

      </div>

      <div className='ml-12 border-2 w-7/12 h-96 shadow-stone-600 shadow-lg bg-white '>

        <div  className='flex p-8 space-x-3 h-fit'>
           <div>
             <input type="text" className='bg-stone-200 focus:outline-none p-2 rounded-lg ' placeholder='Your Name*' />
           </div>
           <div >
             <input type="text" className='bg-stone-200 focus:outline-none p-2 rounded-lg ' placeholder='Your Email*' />
           </div>
           <div >
             <input type="number" className='bg-stone-200 focus:outline-none p-2 rounded-lg ' placeholder='Your Phone*' />
           </div>
        </div>   


        <div className='border-2 ml-8 mr-8 rounded-md mb-2'>
          <textarea className='h-52 w-full focus:outline-none'  placeholder=' Message'/>
        </div>

        <button className='h-10 bg-red-500 float-right mr-3  text-white border-2 w-40 rounded-lg'>Send message</button>
      </div>      
   </div>
   
 </div>
   </> 
  )
}
