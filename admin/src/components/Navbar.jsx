import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken,setAToken } = useContext(AdminContext);  // Ensure it matches 'atoken'
  
  const navigate =useNavigate()
  const logout=()=>
  {
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    navigate('/login')

  }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 bg-white gap-2">
      <div className="flex items-center gap-2 text-xs">
        <img className="w-36 cursor-pointer" src={assets.admin_logo} alt="" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-500">{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className="bg-blue-500 text-white text-sm px-10 py-2 rounded-full cursor-pointer">Logout</button>
    </div>
  );
};

export default Navbar;
