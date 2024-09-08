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
function Header (){
  return (
    <header className="w-full">
      <div className="bg-green-200 py-2 flex justify-center items-center">
        <span className="bg-blue-600 text-white text-sm px-2 py-1 rounded-full mr-2">New</span>
        <span className="text-gray-700 text-sm">
          Using Teamly is a manifesto in itself. It is simply the best choice for your email marketing
        </span>
      </div>
      <div className="flex justify-between items-center py-4 px-9 bg-white">
        <div className="text-blue-500 text-xl pl-12 font-bold">Newsify</div>
        <nav className="hidden md:flex ml-auto space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 pr-4 ">Demo</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none"/>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Register</button>
        </div>
      </div>
    </header>
  );
};
function Top(){
  return(
    <div className="flex space-x-50 mt-20" >
      <div className="h-1/2 pl-12  w-1/2"> 
        <span className="text-sm">Hey,Everyone👋</span>
        <h1 className="font-bold text-6xl">Newsify is the email newsletter that works completely automated</h1>
        <p className="text-sm p-4">Track connections in real time. See who your community being lead by and
           find the most active</p>
      <input type="text" placeholder="Search" className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none"/>
      <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 ml-4">Register</button>
       </div>
       <img src={Imagedessus} className="hidden lg:block w-1/3 ml-20 object-cover" alt=""> </img>
    </div>
  );
};
function Bottom(){
  return (
  <>
  <div className="text-center my-8 pt-5 px-4">
      <h1 className="text-3xl font-bold mb-4">Let Your Newsletter Do the Talk</h1>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Let’s claim it, today we don’t have the time to talk or the time to scroll over groups
         or other platforms. 
        So it is better for your automated newsletter to do the talking. What could be done better? 
        Stay connected to your community.
      </p>
    </div>
  <div className="grid place-items-center h-srceen">
    <img src={Imagedessous} alt="" className="h-3/4 pb-7 pt-0 m-auto "></img>
   </div>
  </>
  );
}
function Middle() {
  return (
    <>
      <div className="bg-blue-500 flex justify-between items-center p-4 space-x-4 w-full">
        <img src={stripe} alt="Stripe" className="w-1/10 p-2" />
        <img src={google} alt="Google" className="w-1/10 p-2" />
        <img src={samsung} alt="Samsung" className="w-1/10 p-2" />
        <img src={visa} alt="Visa" className="w-1/10 p-2" />
        <img src={spotify} alt="Spotify" className="w-1/10 p-2" />
        <img src={linkdin} alt="LinkedIn" className="w-1/10 p-2" />
        <img src={zoom} alt="Zoom" className="w-1/10 p-2" />
      </div>
    </>
  );
}
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
