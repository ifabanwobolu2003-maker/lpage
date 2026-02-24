import React from 'react'

const Footer = () => {
  return (
    <div>
        <p className="text-center text-gray-300 text-sm py-10 px-6 md:px-12">
            &copy; {new Date().getFullYear()} THUB. All rights reserved.
        </p>
    </div>
  )
}

export default Footer