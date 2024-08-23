"use client"
import { useState } from "react";
const header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    }
  return (
    <header className="w-full h-16 flex justify-between items-center text-black shadow-md px-8 bg-white">
          <div className="flex gap-1 items-center">
            <img src="/Logo1.png" alt="" className="h-10" />
            <div className="text-2xl font-extrabold">HemLLP</div>
            </div>
      
      <nav className="hidden md:flex space-x-12">
        <a href="/" className="font-bold hover:underline">Home</a>
        <a href="/about" className="font-bold hover:underline">About Us</a>
        <a href="#" className="font-bold hover:underline">Careers</a>
        <a href="#" className="font-bold hover:underline">Our Team</a>
      </nav>
      <a href="/contact" className="hidden md:inline-block border border-black rounded-full px-4 py-1 font-bold">Get in touch</a>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4 z-40">
          <a href="/" className="font-bold hover:underline">Home</a>
          <a href="/about" className="font-bold hover:underline">About Us</a>
          <a href="#" className="font-bold hover:underline">Careers</a>
          <a href="#" className="font-bold hover:underline">Our Team</a>
          <a href="/contact" className="border border-black rounded-full px-4 py-1 font-bold">Get in touch</a>
        </nav>
      )}
    </header>
  )
}

export default header
