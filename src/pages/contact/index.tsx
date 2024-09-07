"use client"
import { useState } from "react";
import Image from "next/image";
import Header from "../../components/header";       
import Link from "next/link";

const Hero = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Header />
    <img src="https://images.unsplash.com/photo-1586340538304-5abcf3ef773a?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-[30rem] object-cover" />
    <section className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Contact our friendly team</h2>
        <p className="text-gray-600">Let us know how we can help.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Chat to Sales */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M19 12h2m-2 4h2M2 12h2m-2 4h2M9 6h6M15 6a3 3 0 00-6 0v.01M13 12a1 1 0 100 2m-4-2a1 1 0 100 2m-3 1h.01M4 4a1 1 0 011-1h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">Chat to sales</h3>
          <p className="text-gray-500">Speak to our friendly team.</p>
          <Link href="mailto:sales@untitledui.com" className="text-blue-500 mt-2 inline-block">sales@untitledui.com</Link>
        </div>

        {/* Chat to Support */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V9a7 7 0 10-14 0v4m10 4v3a3 3 0 01-6 0v-3m-4-2h14" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">Chat to support</h3>
          <p className="text-gray-500">We&apos;re here to help.</p>
          <Link href="mailto:support@untitledui.com" className="text-blue-500 mt-2 inline-block">support@untitledui.com</Link>
        </div>

        {/* Visit Us */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c-1.38 0-2.5-1.12-2.5-2.5S10.62 6 12 6s2.5 1.12 2.5 2.5S13.38 11 12 11zM12 2C7.03 2 3 6.03 3 11c0 4.97 3.03 9 7 9s7-4.03 7-9c0-4.97-3.03-9-7-9zM11 11v3m2-3v3" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">Visit us</h3>
          <p className="text-gray-500">Visit our office HQ.</p>
          <Link href="https://www.google.com/maps" className="text-blue-500 mt-2 inline-block">View on Google Maps</Link>
        </div>

        {/* Call Us */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h.01M6 7h.01M3 7h.01M6 4h.01M3 4h.01M21 16v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m-4 0v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1m0 4h14a2 2 0 002-2v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m4 0H3m10-16V4a2 2 0 012 2h-2a2 2 0 01-2-2V3a2 2 0 012 2m0 0a2 2 0 012 2h-2a2 2 0 01-2-2m0 0a2 2 0 012 2h-2a2 2 0 01-2-2m0 0a2 2 0 012 2h-2a2 2 0 01-2-2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium">Call us</h3>
          <p className="text-gray-500">Mon-Fri from 8am to 5pm.</p>
          <Link href="tel:+1555000000" className="text-blue-500 mt-2 inline-block">+1(555) 000-0000</Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;