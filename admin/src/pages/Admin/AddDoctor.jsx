import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'
const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 year')
  const [fees, setFees] = useState(0)
  const [speciality, setSpeciality] = useState('')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [about, setAbout] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!docImg) {
        return toast.error('please upload doctor image')
      }
      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('speciality', speciality)
      formData.append('experience', experience)
      formData.append('about', about)
      formData.append('fees', Number(fees))
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))
      //console
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      })

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
      console.log("ok")
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setExperience('1 year')
        setFees(0)
        setSpeciality('')
        setDegree('')
        setAddress1('')
        setAddress2('')
        setAbout('')
        console.log("ds")
      }
        else{
      toast.error(data.message) }
    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full' action="">
      <p className='mb-3 text-lg font-medium'>Add doctor</p>

      <div className='bg-white px-8 py-8 border-rounded  w-fullmax-w-4xl max-h-[80hv] overflow-y-scroll'>
        <div className='flex items-center gap-5 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>upload doctor picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="text" placeholder='email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} name="" id="">
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder='fees' required />
            </div>

          </div>
          <div>
            <div>
              <p>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} name="" id="">
                <option value="General">General</option>
                <option value="Gyneocologist">Gyneocologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <p>education</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='address' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
            </div>

          </div>
        </div>

        <div className='flex-1 flex flex-col gap-1'>
          <p>About</p>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='border rounded px-3 py-2' type="text" placeholder='write about' rows={5} required />
        </div>

        <button type='submit' className='bg-blue-500 px-10 py-3 mt-3 text-white rounded-ful cursor-pointer' >add  doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor