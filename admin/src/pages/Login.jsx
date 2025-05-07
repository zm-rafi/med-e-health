import React, { useState, useContext } from 'react';
import { AdminContext } from '../context/AdminContext'; // update path as necessary
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const {setAToken, backendUrl} = useContext(AdminContext);
  
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      if(state==='Admin'){
        const {data} = await axios.post(backendUrl+'/api/admin/login',{email,password})
        if(data.success){
          localStorage.setItem('aToken',data.token)
          setAToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }else{

      }
    }catch(error){
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 mx-auto items-start p-8 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className='text-2xl font-semibold m-auto'><span className="font-bold capitalize">{state}</span> Login</p>
        <div className="w-full">
          <p>Email</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email"
            required
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password}
            type="password"
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {
          state === "Admin"? <p>Doctor Login?<span className='text-blue-500 underline cursor-pointer' onClick={()=>setState('Doctor')}>Click here</span></p>
          : <p>Admin login?<span className='text-blue-500 underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span></p>
        }
      </div>
    </form>
  );
};

export default Login;
