import React from "react";

import { FaShippingFast } from "react-icons/fa";

import { RiCustomerService2Line } from "react-icons/ri";

import { SiAdguard } from "react-icons/si";

import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";

export default function Mian() {
  return (
    <div className="bg-white h-full ">
      <div className="flex">
      <div className=" flex flex-col pl-12 pt-14 space-y-5 p-0  w-[217px] ">
        <p>Women's Fasions</p>
        <p>Men's Fashion</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Health & Beauty</p>
        <p>Baby's & Toys</p>
        <p>Sports & Outdoor</p>
      </div>
      <div className="h-80 mt-6 w-1 bg-gray-800 "></div>

      <div className="m-10 ml-20">
        <img src="./homephone1.jpeg" alt="phone" width={900} height={300} />
      </div>
      </div> 

        <h1 className="text-red-600 text-2xl pt-12 pl-12 font-bold">Today's</h1>
        <div className="flex justify-center space-x-12">
          <p>Days</p>
          <p>Hours</p>
          <p>Minutes</p>
          <p>Seconds</p>
          </div>
      <div className=" pl-12 text-5xl flex ">
       <h1>Flash Sale's</h1>
       <p className="pl-44 space-x-2">03 :</p>
       <p className="pl-2">23 :</p>
       <p className="pl-4"> 50 :</p>
       <p className="pl-4">60</p>
        </div>
        
        <div className="mt-10 ml-12 flex justify-around" >
          <img src="./jacket.jpg" alt="" />
          <img src="./bag.jpg" alt="" />
          <img src="./book.jpg" alt="" />
          <img src="./speaker.jpg" alt="" />
        </div>

        <div className="mt-10 ml-12  flex justify-around">
          <img src="./car.jpg" alt="" />
          <img src="./dogFood.jpg" alt="" />
          <img src="./game.jpg" alt="" />
          <img src="./laptop.jpg" alt="" />
        </div>

        <div className="mt-10">
            <h3 className="text-red-600 text-xl font-bold pt-10 px-5">
            Categories
            </h3>
            <h2 className="text-4xl font-semibold px-5 py-5 tracking-wide">
            Browse By Category
            </h2>
            <div className="flex flex-row justify-evenly">
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <IoIosPhonePortrait size={70} />
                <p>Phone</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <RiComputerLine size={70} />
                <p>Computer</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <BsSmartwatch size={70} />
                <p>Smartwatch</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <BsCamera size={70} />
                <p>Camera</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <FiHeadphones size={70} />
                <p>Headphones</p>
            </div>
            <div className="w-36 border border-gray-400 rounded-md flex flex-col items-center py-7 px-6">
                <IoGameControllerOutline size={70} />
                <p>Gaming</p>
            </div>
            </div>
        </div>

        <h1 className="mt-12 text-6xl pt-12 pl-12 font-bold">New Arrival</h1>
         <div className="pl-36 pt-16 mb-2">
          <img src="./new1.jpg" alt=""  width={800} height={300}/>
          <div className="flex justify-around">
          <img src="./new2.jpg" alt="" className="mt-8" width={400} />
          <img src="./new3.jpg" alt="" height={200} className="mt-8" />
          </div>
         </div>

         <div className=" flex mt-16 justify-center space-x-10 pb-12 w-full ">
        <div className="h-44 w-56 border-2 rounded-md text-center font-sans shadow-lg hover:shadow-slate-400 hover:shadow-2xl ">
          <FaShippingFast className=" ml-16 mt-5 text-7xl border-4  border-black rounded-full p-2 " />
          <p className="mt-7 text-xl">Free and fast Delivery</p>
        </div>
        <div className="h-44 w-60 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md border-grey-300">
          <RiCustomerService2Line className="  ml-20 mt-5 text-7xl border-4  border-black rounded-full p-2 " />
          <p className="mt-7 pl-2 text-xl">24/7 Customer Service</p>
        </div>
        <div className="h-44 w-56 border-2 shadow-lg hover:shadow-slate-400 hover:shadow-2xl rounded-md ">
          <SiAdguard className=" ml-16 mt-5 text-7xl border-4  border-black rounded-full p-2  " />
          <p className="mt-7 text-lg pl-3"> Money Back Guarentee</p>
        </div>
      </div>
      </div>
   
  );
}
