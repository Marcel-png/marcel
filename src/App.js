import React from "react";
import stripe from './stripe-seeklogo.com.svg'
import google from './go.svg'
import samsung from './sam.svg'
import visa from './visa.svg'
import spotify from './spotify-seeklogo.com 2.svg'
import linkdin from './link.svg'
import zoom from './zo.svg'
import Imagedessous from'./design.png'
import Imagedessus from './image.png'
import { useState } from 'react';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white">
      <div className="bg-green-200 py-2 flex justify-center items-center">
        <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full mr-2">New</span>
        <span className="text-gray-700 text-sm text-center">
          Using Teamly is a manifesto in itself. It is simply the best choice for your email marketing.
        </span>
      </div>
      <div className="grid grid-cols-12 items-center py-4 px-4 max-w-screen-lg mx-auto">
        <div className="col-span-6 md:col-span-8 text-blue-500 text-xl font-bold">
          Newsify
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="col-span-6 lg:hidden focus:outline-none text-gray-700 justify-self-end">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav className="hidden md:col-span-4 lg:flex justify-end space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 mr-8">About_Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 pr-4">Demo</a>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded-full mb-4 sm:mb-0"/>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">Register</button>
        </div>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden lg:ml-auto w-full px-4 mt-4 space-y-4 text-center">
          <a href="#" className="block text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900">Demo</a>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded-full mb-4 sm:mb-0"/>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">Register</button>
        </div>
        </div>
      )}
    </header>
  );
};
function Top() {
  return (
    <div className="grid grid-cols-12 mt-32 max-w-screen-lg mx-auto px-4">
      <div className="col-span-12 md:col-span-8   text-center md:text-left">
        <span className="text-sm block">Hey, Everyone👋</span>
        <h1 className="font-bold text-4xl md:text-6xl leading-tight mt-4">
          Newsify is the email newsletter that works completely automated
        </h1>
        <p className="text-sm py-4">
          Track connections in real time. See who your community is being led by and find the most active.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded-full mb-4 sm:mb-0"/>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">Register</button>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end mt-8 md:mt-0">
        <img src={Imagedessus} className="w-full object-cover lg:block hidden" alt=" "/>
      </div>
    </div>
  );
};
function Middle() {
  return (
    <div className="mt-20">
      <div className="bg-blue-600 p-8">
        <div className="flex justify-center items-center space-x-4 lg:space-x-12">
          <img src={stripe} alt="Stripe" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={google} alt="Google" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={samsung} alt="Samsung" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={visa} alt="Visa" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={spotify} alt="Spotify" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={linkdin} alt="LinkedIn" className="w-[10vw] max-w-[100px] min-w-[40px]" />
          <img src={zoom} alt="Zoom" className="w-[10vw] max-w-[100px] min-w-[40px]" />
        </div>
      </div>  
    </div>
  );
};
function Bottom(){
  return (
  <>
  <div className="text-center my-8 mt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Let Your Newsletter Do the Talk</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Let’s claim it, today we don’t have the time to talk or the time to scroll over groups
         or other platforms. 
        So it is better for your automated newsletter to do the talking. What could be done better? 
        Stay connected to your community.
      </p>
    <img src={Imagedessous} alt="" className="mx-auto size-7/12 mt-10"></img>
   </div>
  </>
  );
};
export default function App() {
  return (
  <div>
    <Header/>
    <Top/>
    <Middle/>
    <Bottom/>
  </div>
  );
}
