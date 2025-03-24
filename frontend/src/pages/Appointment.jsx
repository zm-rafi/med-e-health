import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
const Appointment = () => {
  const {docId}=useParams()
  const {doctors}=useContext(AppContext)
  const [docInfo,setDocInfo]=useState(null)
  const fetchDocInfo = async () =>{
    const docInfo = doctors.find(doc=> doc._id===docId)
    setDocInfo(docInfo)
  }
  useEffect(()=>{
    fetchDocInfo()
  }),[doctors,docId]
  return docInfo &&(
    <div>
     {/* =====doctor details------ */}
     <div className='flex flex-col sm:flex-row gap-4'>
      <div>
        <img className='bg-blue-200 w-full rounded-lg' src={docInfo.image} alt="" />
      </div>

      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7'>
        {/* ------doc info */}
        <p className='flex item-center gap-2 text-2xl font-medium text-gray-600'>
          {docInfo.name} <img className='w-6' src={assets.verified_icon} alt="" />
        </p>
        <div  className='flex item-center gap-2 text-sm font-medium mt-1 text-gray-900'>
          <p>{docInfo.degree}  - {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
        </div>
        {/* ----doc about */}
        <div>
          <p className='flex items-centergap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p>
          Appointment fee:$ <span>{docInfo.fees}</span>
        </p>
      </div>
     </div>
    </div>
  )
}

export default Appointment