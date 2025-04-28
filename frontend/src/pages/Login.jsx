import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'

const Login = () => {
  const [state,setState]=useState('Sign Up')

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')

  const  onSubmitHamdler =async (event)=> {
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center' action="">
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semi-bold'>{state==='Sign Up'?"create acount":"Login"}</p>
        <p>Please {state==='Sign Up'? "sign up":"log in"}to book appointment</p>
        {
          state=== "Sign Up" && <div className='w-full'>
          <p>Fullname</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(email.target.name)} value={name} required/>

        </div>
        }
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(email.target.name)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-400 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(email.target.name)} value={password} required/>
        </div>
        <button className='bg-blue-500 text-white w-full py-2 rounded-md text-base'>{state==='Sign Up'?"Create Account":"Login"}</button>
        {
          state==='Sign Up'? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-blue-400 underline cursor-pointer'>Login here</span></p>:
          <p>Create an new account? <span onClick={()=>setState('Signup')} className='text-blue-400 underline cursor-pointer'>Click Here</span> </p>
        }
      </div>
    </form>
  )
}

export default Login