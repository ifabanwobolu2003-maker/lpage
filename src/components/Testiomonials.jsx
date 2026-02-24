import React from 'react'
import { testimonials } from '../constants'

const Testiomonials = () => {
  return (
    <div id="testimonials" className='mt-20 tracking-wide'>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 lg:my-20 tracking-wide">
        Testimonials
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 border border-neutral-700 rounded-md text-md p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold">{testimonial.user}</p>
                  <p className="text-sm text-neutral-400">{testimonial.Program}</p>
                </div>
              </div>
              <p className="text-neutral-300">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testiomonials