import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import  {toast} from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [experience,setExperience]=useState('1year')
  const [fees,setFees]=useState('')
  const [speciality,setSpeciality]=useState('General')
  const [degree,setDegree]=useState('')
  const [address,setAddress]=useState('')
  const [about,setAbout]=useState('')
  const [select,setSelect]=useState('')

  const [backendUrl,aToken] =useContext(AdminContext)


  const onSubmitHandler  = async(event)=>{
    event.preventDefault()
    try{
      if(!docImg){
        return toast.error('image is required')
      }
      const formData = new FormData()
      formData.append('image',docImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('fees',fees)
      formData.append('about',about)
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('address',JSON.stringify(address))

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      })

      const {data} = await axios.post(backendUrl+'/admin/add-doctor',formData,{headers:{aToken}})
      if(data.success){
        toast.success(data.message)
      } else{
        toast.error(data.message)
      }
    }catch(error){

    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full' action="">
      <p className='mb-3 text-lg font-medium'>Add doctor</p>
      <div className='bg-white px-8 py-8 border-rounded  w-fullmax-w-4xl max-h-[80hv] overflow-y-scroll'>
        <div className='flex items-center gap-5 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img  className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg? URL.createObjectURL(docImg):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id='doc-img' hidden/>
          <p>upload doctor picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor name</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text"  placeholder='name' required/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="text"  placeholder='email' required/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password"  placeholder='password' required/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <input onChange={(e)=>setExperience(e.target.value)} value={experience} type="number" />
            </div>
            <div  className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <select onChange={(e)=> setFees(e.target.value)} value={fees} name="" id="">
                <option value="">100</option>
                <option value="">200</option>
                <option value="">300</option>
                <option value="">400</option>
                <option value="">500</option>
                <option value="">600</option>
                <option value="">700</option>
              </select>
            </div>
          </div>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} name="" id="">
                <option value="General">General</option>
                <option value="Gyneocologist">Gyneocologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <div className='flex gap-5'>
                <label><input type="checkbox" id="mbbs" /> MBBS</label><br />
                <label><input type="checkbox" id="fcps" /> FCPS</label><br />
                <label><input type="checkbox" id="frcs" /> FRCS</label><br />
              </div>
              <input onChange={(e)=>setDegree(e.target.value)} value={degree} type="text"  placeholder='Education' required/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>address</p>
              <input onChange={(e)=>setAddress(e.target.value)} value={address} className='border rounded px-3 py-2' type="text"  placeholder='address' required/>
            </div>
            <div>
              <p className='mt-4 mb-2'>about</p>
              <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' type="text"  placeholder='about' rows={5} required/>
            </div>
            <button type='submit' className='bg-blue-400 px-10 py-3 mt-4 text-white rounded-full'>Add doctor</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddDoctor