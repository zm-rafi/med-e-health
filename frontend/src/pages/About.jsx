import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'> Us</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur voluptates laudantium quaerat soluta sunt porro perspiciatis laborum consectetur tempora natus.</p>
      <p>    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nihil nobis harum delectus provident voluptate praesentium voluptatem soluta rerum obcaecati ullam iusto commodi aspernatur, eum sunt sed atque? Totam, amet!</p>
      <b className='text-gray-800'>Our Vision</b>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nihil nobis harum delectus provident voluptate praesentium voluptatem soluta</p>
      </div>
    </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <p>Efficiency:</p>
          <b>Streamlined appointment scheduling thatfits intobusy lifestyle</b>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <p>Convience</p>
          <b>access to network with trusted doctors</b>
        </div>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer '>
          <p>Personalization</p>
          <b>save your  records with high security and track your health record</b>
        </div>
      </div>
    </div>
  )
}

export default About