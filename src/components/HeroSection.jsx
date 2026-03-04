import React from 'react'
import code from "../assets/code.jpg";
import brand2 from "../assets/thub.jpg"; 

const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col mt-6 lg:mt-20 items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl pb-8 text-center font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> 
        The Future Tech Learning Hub
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Learn. Build. Launch.
        <span>
           {" "} THUB helps developers and creators build real-world tech skills through hands-on projects, expert mentorship, and a vibrant community. Join us and turn your ideas into reality.
        </span>
        </p>
        <div id="pricing" className="flex justify-center my-10">
            <a href="#pricing" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-md text-lg">
                Get Started
            </a>
        </div>
        <div className="flex justify-center">
            <img src={brand2} alt="code" className="w-full max-w-4xl rounded-lg shadow-lg" />
        </div>
        <div className="flex items-center mt-10 space-x-4">
            <img src={brand2} alt="brand2" className="h-12 w-12 rounded-full" />
            <span className="text-sm text-neutral-500">Trusted by developers worldwide</span>
        </div>
    </div>
  )
}

export default HeroSection