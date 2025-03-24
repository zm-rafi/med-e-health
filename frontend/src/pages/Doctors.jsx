import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { useState } from 'react'
import { doctors } from '../assets/assets'
const Doctors = () => {
   const {speciality} = useParams()
   const [filterDoc,setFilterDoc]=useState([])
   const navigate = useNavigate()
  
  // const {doctors}=useContext(AppContext)

   const applyFilter = ()=>{
     if(speciality){
       setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
     }
     else{
       setFilterDoc(doctors)
     }
   }

   useEffect(()=>{
     applyFilter()
   },[doctors,speciality])
  return (
    <div>
      
      <p className='text-gray-600'>Browse and filter out</p>
      <div className='flex flex-col sm:flex-row  items-start gap-5 mt-5'>
        
          <p onClick={()=> speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor-pointer ${speciality==="General"?"bg-indigo-100 text-black" :""}`}>General</p>
          <p onClick={()=> speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor-pointer ${speciality==="Gyneocologist"?"bg-indigo-100 text-black" :""}`}>Gyneocologist</p>
          <p onClick={()=> speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor-pointer ${speciality==="Dermatologist"?"bg-indigo-100 text-black" :""}`}>Dermatologist</p>
          <p onClick={()=> speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor- ${speciality==="Pediatricians"?"bg-indigo-100 text-black" :""}`}>Pediatricians</p>
          <p onClick={()=> speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor-pointer ${speciality==="Neurologist"?"bg-indigo-100 text-black" :""}`}>Neurologist</p>
          <p onClick={()=> speciality==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vm] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded translation-all cursor-pointer ${speciality==="Gastroenterologist"?"bg-blue-100 text-black" :""}`}>Gastroenterologist</p>
          
        </div>
        <div className='w-full grid grid-cols-4 gap-4 gap-y-6 mt-10 p-5'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index}  className='border-blue-200 rounded-x-1 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p></p><p>Available</p>
                  </div>
                  <h1>{item.name}</h1>
                <p>{item.speciality}</p>
                </div>
                
                {/* <p>{doctors.experience}</p> */}
                
              </div>
            ))
          }
        </div>
      
    
    </div>
  )
}

export default Doctors