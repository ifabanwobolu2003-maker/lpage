import React from 'react'
import { CheckCircle2 } from "lucide-react";
import call from "../assets/thubcta.jpg";
import { checklistItems } from '../constants';


const CTA = () => {
  return (
    <div id="cta" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Ready to join 
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                {" "}THUB?
            </span>
        </h2>
        <p className="mt-6 text-lg opacity-90 text-center text-neutral-500 max-w-3xl mx-auto">
            Start Building real tech skills today.
        </p>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={call} alt="call" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex items-start mb-8">
                        <div className="text-white-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="mt-1 mb-2 text-xl font-bold">{item.title}</h3>
                            <p className="text-md text-neutral-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CTA