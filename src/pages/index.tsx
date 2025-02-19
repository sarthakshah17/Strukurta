"use client"

import Image from "next/image"
import { useState } from "react";
import Header from "../components/header";  
import Client from "../components/client";  
import Footer from "../components/footer";


function ProductCard({ title, price, image, brand, status }:any) {
    return (
      <div className="bg-white rounded-3xl p-4 shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-40 mb-4 overflow-hidden rounded-3xl">
          <Image src={image} alt={title} layout="fill" objectFit="contain" className="hover:scale-110 transform transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-2">{price}</p>
        <p className="text-gray-500 mb-2">Brand: {brand}</p>
        <p className={`text-${status === 'Ready' ? 'green-500' : 'red-500'} mb-4`}>Status: {status}</p>
        <button className="bg-white text-black border border-gray-300 rounded-full px-6 py-2 font-bold hover:bg-gray-200 w-full">Buy now</button>
      </div>
    );
  }

  function ProjectCard({ title, location, image, brand, input }:any) {
    return (
      <div className="bg-white rounded-3xl p-4 shadow hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-52 mb-4 overflow-hidden rounded-3xl  ">
          <Image src={image} alt={title} layout="fill" objectFit="contain" className=" scale-125 hover:scale-110 transform transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-2">Location :  {location}</p>
        <p className="text-gray-500 mb-2">Destination : {brand}</p>
        <p className="text-gray-500 mb-2">Total Input : {input}</p>
        <button className="bg-white text-black border border-gray-300 rounded-full px-6 py-2 font-bold hover:bg-gray-200 w-full">Read More</button>
      </div>
    );
  }

  const testimonials = [
    {
      text: "Their commitment to quality and attention to detail is unmatched. I've had the pleasure of collaborating with Hem Contracts on multiple projects, and I must say their commitment to quality and attention to detail is unmatched. Their team's expertise in construction has truly elevated the success of my developments.",
      name: 'Madison Johnson',
      role: 'Property Developer',
      image: '/image 1.png', 
    },
    {
        text: "lol",
        name: 'Madison Johnson',
        role: 'Property Developer',
        image: '/construction.jpg', 
      },
      {
        text: "Their commitment to quality and attention to detail is unmatched. I've had the pleasure of collaborating with Hem Contracts on multiple projects, and I must say their commitment to quality and attention to detail is unmatched. Their team's expertise in construction has truly elevated the success of my developments.",
        name: 'Madison Johnson',
        role: 'Property Developer',
        image: '/construction.jpg', 
      },
    
  ];

export default function Page() {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
        <Header />
  

        <main className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/construction.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 pt-72 items-center text-white text-center px-10 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold">Building Your Vision with Precision</h1>
          <p className="mt-4 max-w-5xl mx-auto">We, HEM CONTRACTS LLP are a team of experienced Plumbing Contractors. We bring to you an assurance of quality deliverables, prompt service and effective execution. We have been in the industry for more than 9 years now and boast of a rich roster of satisfied clients.
          </p>
          <button className="mt-6 bg-white text-black rounded-full px-6 py-2">Learn more</button>
        </div>
      </main>
       
  
        <section className="py-16 px-4 bg-blue-50 text-black text-center ">
          <h2 className="text-5xl font-bold mb-6 mt-20">Our Legacy of Excellence</h2>
          <p className="max-w-2xl mx-auto mb-12 text-justify">Established 2012, Hem Contracts has been a leading force in the construction industry, specializing in commercial office building construction. Our commitment to quality and innovation sets us apart.</p>
          <div className="flex flex-wrap justify-center gap-32  md:gap-56">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">260+</span>
              <span>Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">95%</span>
              <span>Satisfaction Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">200+</span>
              <span>Satisfied Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">100+</span>
              <span>Qualified Engineers</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center space-x-2 border border-black p-4 rounded-3xl">
              <div className="bg-black text-white rounded-full  p-2">✔️</div>
              <span>Always building quality industrial</span>
            </div>
            <div className="flex items-center space-x-2 border border-black p-4 rounded-3xl">
              <div className="bg-black text-white rounded-full p-2">✔️</div>
              <span>Best manufacturing service provider</span>
            </div>
            <div className="flex items-center space-x-2 border border-black p-4 rounded-3xl">
              <div className="bg-black text-white rounded-full p-2">✔️</div>
              <span>Using the newest manufacturing tech</span>
            </div>
            <div className="flex items-center space-x-2 border border-black p-4 rounded-3xl">
              <div className="bg-black text-white rounded-full p-2">✔️</div>
              <span>Experienced trusted contractor</span>
            </div>
          </div>
        </section>
        <Client />


        <section className="py-16 px-4 mt-2 text-black ">
          <h2 className="text-5xl  mb-6 text-center">Why Choose HEM Contracts Construction</h2>
          <p className="max-w-2xl mx-auto mb-12 text-justify px-9 md:px-0">At HEM Contracts Construction, our commitment to excellence, unparalleled expertise and unwavering dedication set us apart, Here's why you should choose us :</p>
         
          <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex flex-col  space-x-2">
                <Image width={400} height={200} alt="lol" src="/image 1.png" className="rounded-3xl object-cover h-80" />
              
              <span className="text-xl -mt-14 font-bold text-white ml-4">Always building quality industrial</span>
              <p className="text-white ml-4">Lorem ipsum dolor, sit amet </p>
              
            </div>
            <div className="flex flex-col  space-x-2 ">
                <Image width={400} height={200} alt="lol" src="/image 4.png" className="rounded-3xl object-cover h-80" />
              
              <span className="text-xl -mt-14 font-bold text-white ml-4">Always building quality industrial</span>
              <p className="text-white ml-4">Lorem ipsum dolor, sit amet </p>
              
            </div>
            <div className="flex flex-col  space-x-2 ">
                <Image width={400} height={200} alt="lol" src="/image 3.png" className="rounded-3xl object-cover h-80" />
              
              <span className="text-xl -mt-14 font-bold text-white ml-4">Always building quality industrial</span>
              <p className="text-white ml-4">Lorem ipsum dolor, sit amet </p>
              
            </div>
            
          </div>
        </section>


        <section className="bg-gray-50 py-12 mt-20">
        <h2 className="text-5xl  mb-6 text-center ">Why Choose Hem Contracts Construction</h2>
        <p className="max-w-2xl mx-auto mb-12 text-justify px-10 md:px-0">At Hem Contracts Construction, our commitment to excellence, unparalleled expertise and unwavering dedication set us apart, Here's why you should choose us :</p>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-2 mb-8">
          <button className="bg-white text-black border border-gray-300 rounded-full px-4 py-1 font-bold hover:bg-gray-200">Structural Materials</button>
          <button className="bg-white text-black border border-gray-300 rounded-full px-4 py-1 font-bold hover:bg-gray-200">Finishing Materials</button>
          <button className="bg-white text-black border border-gray-300 rounded-full px-4 py-1 font-bold hover:bg-gray-200">Machinery and Equipment</button>
          <button className="bg-white text-black border border-gray-300 rounded-full px-4 py-1 font-bold hover:bg-gray-200">Safety Gear and Apparel</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            title="Steel Beams"
            price="$500 - $2,500"
            image="/image 1.png"
            brand="SteelMax"
            status="Pre-order"
          />
          <ProductCard
            title="Concrete Blocks"
            price="$300 - $1,000"
            image="/construction.png"
            brand="BlockCraft"
            status="Ready"
          />
          <ProductCard
            title="Concrete Remesh"
            price="$200 - $1,500"
            image="/construction.png"
            brand="ReMeshPro"
            status="Pre-order"
          />
          <ProductCard
            title="Timber Beams"
            price="$800 - $2,500"
            image="/construction.png"
            brand="TimberTech"
            status="Ready"
          />
        </div>
        <div className="text-center mt-8">
          <button className="bg-white text-black border border-gray-300 rounded-full px-6 py-2 font-bold hover:bg-gray-200">View all products</button>
        </div>
      </div>
    </section>


    <section className="bg-gray-50 py-12 mt-20">
        <h2 className="text-5xl  mb-6 text-center">Our Remarkable Project Portfolio</h2>
        <p className="max-w-2xl mx-auto mb-12 text-justify">At Hem Contracts Construction, our commitment to excellence, unparalleled expertise and unwavering dedication set us apart, Here's why you should choose us :</p>
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Steel Beams"
            location="Los Angeles"
            image="/construction.png"
            brand="SteelMax"
            input="Pre-order"
          />
          <ProjectCard
            title="Concrete Blocks"
             location="Los Angeles"
            image="/construction.png"
            brand="BlockCraft"
            input="Ready"
          />
          <ProjectCard
            title="Concrete Remesh"
             location="Los Angeles"
            image="/construction.png"
            brand="ReMeshPro"
            input="Pre-order"
          />
          
        </div>
        <div className="text-center mt-8">
          <button className="bg-white text-black border border-gray-300 rounded-full px-6 py-2 font-bold hover:bg-gray-200">View all </button>
        </div>
      </div>
    </section>
    <section className="bg-gray-50 py-12 mt-20">
        <h2  className="text-5xl  mb-6 text-center">Client Voices of Satisfaction</h2>
    </section>


    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-md relative">
          <blockquote className="text-lg italic text-gray-700 mb-4">“ {testimonials[current].text} ”</blockquote>
          <p className="text-lg font-bold text-gray-800">{testimonials[current].name}</p>
          <p className="text-gray-500">{testimonials[current].role}</p>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-200"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-200"
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className=" w-80 h-full mx-auto rounded-3xl overflow-hidden text-black">
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              width={400}
              height={400}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
    <Footer />
      </>
    );
  }
  