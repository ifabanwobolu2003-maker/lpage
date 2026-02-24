import React from 'react'
import { features } from "../constants/index.jsx";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-medium uppercase">
                Features
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                Why Choose 
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                   {" "} THUB
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 ">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className=" flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                        <div className="text-blue-500 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.text}</h3>
                        <p className="text-neutral-400">{feature.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection