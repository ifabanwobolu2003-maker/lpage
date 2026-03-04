import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'
import { useNavigate } from 'react-router-dom'


const Pricing = () => {
  const navigate = useNavigate()
  return (
    <div id="pricing" className='mt-20'>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) =>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8 ">{option.title}</p>
                        <p className="text-2xl mb-8">
                            <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Year</span>
                            </p>
                        <ul className="mb-8">
                            {option.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center mt-8">   
                                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                                    <span className='ml-2'>{feature}</span>
                                  </li>
                            ))}
                        </ul>
                        <button 
                        onClick={() => navigate('/enroll')}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-md text-lg">
                            Choose Plan
                        </button>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Pricing