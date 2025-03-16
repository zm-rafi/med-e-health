import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/* ======Book Appointment======== */}
        <div>
            <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 py- md:px-10 lg px-20'>
                {/* -----Left side-------- */}
                <div className='md:w-1/2 flex-col items-start justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[-30px]'>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                        Book appointment <br />With trusted Doctors
                    </p>
                    <br />
                    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-smfont-light'>
                        <img className='w-28' src={assets.group_profiles} alt="" />
                        <p>your smile is our asset</p>
                    </div> <br />
                    <a href="#speciality" className='w-55 flex items-center gap-2 bg-white px-8 py-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-6'>
                        Book Appointment <img className='w-4' src={assets.arrow_icon} alt="" />
                    </a>
                </div>
                {/* -----right side----- */}
                <div className='md:w-1/2 relative '>
                    <img className='w-full md:absolute md:bottom-0 md:top-auto h-75 rounded-lg' src={assets.header_img} alt="" /> 
                </div>
                
            </div>
        </div>
        {/* ====== Medicine ======== */}
        <div>
            <div className='flex flex-col md:flex-row flex-wrap bg-green-600 rounded-lg px-6 py- md:px-10 lg px-20 mt-4'>
                {/* -----Left side-------- */}
                <div className='md:w-1/2 flex-col items-start justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[-30px]'>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                       Find Medicine<br />with trusted Pharmacy
                    </p>
                    <br />
                    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-smfont-light'>
                        <img className='w-28' src={assets.group_profiles} alt="" />
                        <p>Every life matters</p>
                    </div> <br />
                    <a href="#speciality" className='w-47 flex items-center gap-2 bg-white px-8 py-4 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-6'>
                        Order Medicine <img className='w-4' src={assets.arrow_icon} alt="" />
                    </a>
                </div>
                {/* -----right side----- */}
                <div className='md:w-1/2 relative '>
                    <img className='w-full md:absolute md:bottom-0 md:top-auto h-75 rounded-lg' src={assets.medicine} alt="" /> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header