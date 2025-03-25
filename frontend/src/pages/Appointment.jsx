import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import ReleatedDoctors from '../components/ReleatedDoctors'
const Appointment = () => {
  const {docId}=useParams()
  const {doctors,currencySymbol}=useContext(AppContext)
  const daysOfWeek =['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const [docInfo,setDocInfo]=useState(null)
  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')
  const fetchDocInfo = async () =>{
    const docInfo = doctors.find(doc=> doc._id===docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async()=>{
    setDocSlots([])
    // getting current date
    let today = new Date()
    for(let i=0;i<7;i++){
      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)
      //end time ofthe date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)
      //set hours
      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10? currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots =[]
      while(currentDate<endTime){
        let formattedTime= currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        //add slots to array
        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })
        //increament current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30)
      }
      setDocSlots(prev=>([...prev,timeSlots])) 
    }
  }
  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])
  useEffect(()=>{
    console.log(docSlots);
  },[docSlots])

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
        <p className='text-gray-500 font-medium mt-4'>
          Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
        </p>
      </div>
     </div>
     {/* ======Booking slots======== */}
     <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
      <p>Booking Slots</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
        {
          docSlots.length && docSlots.map((item,index)=>(
            <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?'bg-blue-500 text-white':'border border-gray-500'}`} key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))
        }
      </div>
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text=sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime?'bg-blue-400 text-white':'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <button className='bg-blue-400 text-white text-sm font-light px-14 py-3 mt-4 rounded-full'>Book an Appointment</button>
     </div>
     {/* listing releated docotrs */}
     <ReleatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment