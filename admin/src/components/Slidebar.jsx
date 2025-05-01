import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Slidebar = () => {
    const {aToken} =useContext(AdminContext)
  return (
    <div className='min-h-screen bg-white border-r-2 border-[#E4E4E7] w-[250px] flex flex-col justify-between'>
        {
            aToken && <ul>
                <NavLink className={({isActive})=> `flex items-center gap-5 py-3.5  px-3 cursor-pointer${isActive?'bg-[#F2F3FF] border-r-4 bg-blue-100 border-blue-500':''}`} to={'/admin-dashboard'}>
                    <img src={assets.home_icon} alt="" />
                    <p>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-4 py-3.5  px-3 cursor-pointer${isActive?'bg-[#F2F3FF] border-r-4 bg-blue-100 border-blue-500':''}`} to={'/all-appoinements'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p>Appoinement</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-6 py-3.5  px-3 cursor-pointer${isActive?'bg-[#F2F3FF] border-r-4 bg-blue-100 border-blue-500':''}`} to={'/add-doctor'}>
                    <img src={assets.add_icon} alt="" />
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink className={({isActive})=> `flex items-center gap-6 py-3.5  px-3 cursor-pointer${isActive?'bg-[#F2F3FF] border-r-4 bg-blue-100 border-blue-500':''}`} to={'/doctor-list'}>
                    <img src={assets.people_icon} alt="" />
                    <p>Doctor List</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Slidebar