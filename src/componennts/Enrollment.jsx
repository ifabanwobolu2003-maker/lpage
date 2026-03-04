import React from 'react'
import { useNavigate } from 'react-router-dom'

const Enrollment = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enroll');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Enroll Now</h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Join our community of learners and developers. Start your journey today.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#pricing" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-md text-lg">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Enrollment