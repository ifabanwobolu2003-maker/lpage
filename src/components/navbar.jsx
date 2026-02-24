import React from 'react'
import {Menu, X} from "lucide-react";
import { useState } from 'react';
import brand2 from "../assets/thub.jpg";
import { navItems } from "../constants/index.jsx";

const navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={brand2} alt="brand2" />
            <span className="font-bold text-xl tracking-tight">THUB</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className='hover:text-blue-600' href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-3 rounded-md">
              Sign Up
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="p-2">
              {mobileDrawerOpen ? <X  /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a className='hover:text-blue-600' href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign in
              </a>
              <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
     </nav>
  )
}

export default navbar