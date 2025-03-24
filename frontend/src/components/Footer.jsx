import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex justify-between items-center gap-4 my-10'>
            {/* -------left---------- */}
            <div>
                <img src={assets.logo} alt="" />
                <p className='w-full text-gray-600 leading-6'>lore,dskfikmjnvvnjdklng jsfkng</p>
            </div>
                {/* ------center section-------- */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Privacy policy</li>
                        
                    </ul>
                </div>
                    {/* ----right section */}
                <div>
                    <p>Get In Touch</p>
                    <ul>
                        <li>0121212121</li>
                        <li>zrafi2212172@bscse.uiu.ac.bd</li>
                    </ul>
                </div>
        </div>
        <div> <hr />
            <p className='py-5  text-sm text-center'>© 2021 All rights reserved</p></div>
    </div>
  )
}

export default Footer