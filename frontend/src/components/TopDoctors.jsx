import React from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
  const navigate= useNavigate()
  return (
    
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1>
            Top Doctors to Book
        </h1>
        <p className='sw:w-1/3 text-center text-sm'>simply find your doc</p>
        <div className="w-full gap-4 pt-5 gap-y-6 px-3 sm:px-0 grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
          {doctors.slice(0,10).map((doctors,index)=>(
            <div onClick={()=>navigate(`/appointment/${doctors._id}`)} key={index}  className='border-blue-200 rounded-x-1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
              <img className='bg-blue-50' src={doctors.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p></p><p>Available</p>
                </div>
                <h1>{doctors.name}</h1>
              <p>{doctors.speciality}</p>
              </div>
              
              {/* <p>{doctors.experience}</p> */}
              
            </div>
          ))}
        </div>
        <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer'>more</button>
    </div>
    
  )
}

export default TopDoctors