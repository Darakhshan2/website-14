import React from "react";

import { FaShippingFast } from "react-icons/fa";

import { RiCustomerService2Line } from "react-icons/ri";

import { SiAdguard } from "react-icons/si";

export default function About() {
  return (
    <>
 <div className='w-72 border-t-2  bg-gray-700'></div>
<div className="bg-white pb-10 ">

      <div className="flex bg-white">
        <div className="w-2/6 mt-28 ml-12 ">
          <h1 className="text-5xl p-3 ">Our Story</h1>
          <p className="leading-normal p-3">
            Our Story Launced in 2015, Exclusive is South Asia's premier online
            shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service
            solutions,
            <br />
            <br />
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region. Exclusive has more than 1 Million
            products to offer, growing at a very fast. Exclusive offers a
            diverse assotment in categories ranging from consumer.
          </p>
        </div>

        <div>
          <img src="/about.jpg" className="h-96 ml-36 mt-20" alt="" />
        </div>
      </div>
   
      <h1 className="mt-20 text-5xl text-center ">PROJECT PARTNER'S</h1>
      <div className=" flex mt-20 ml-40 mb-9 space-x-6">
        <div className="relative h-56 w-56 border-2 rounded-lg overflow-hidden group">
          <img
            src="/div1.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block">
              Miss Alyana
              <br />
              Our Designer
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="relative h-56 w-56 border-2 rounded-lg overflow-hidden group">
          <img
            src="/div2.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block">
              Miss Charlotte
              <br />
              Project Manager
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="relative h-56 w-56 border-2 rounded-lg overflow-hidden group">
          <img
            src="/div3.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block">
              Miss Alexa
              <br />
              Quality Assurance Tester
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="relative h-56 w-56 border-2 rounded-lg overflow-hidden group">
          <img
            src="/div4.jpg"
            className="w-full object-cover transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0 duration-300">
            <p className="text-white p-4 block ">
              Miss Scarlett
              <br />
              UI/UX Designer
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-5xl text-center mt-24">OUR SERVICES</h1>
      <div className=" flex mt-14 justify-center space-x-10  w-full ">
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
     
    </>
  );
}
