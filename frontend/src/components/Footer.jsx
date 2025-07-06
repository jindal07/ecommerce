import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div >
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                At Forever, we believe great style never fades. 
                Join our community to be the first to discover new arrivals, limited-time collections, exclusive offers, and fashion tips tailored just for you. 
                Whether you're dressing up for a special moment or embracing everyday comfort, we’ve got your wardrobe covered. 
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='hover:text-gray-800 cursor-pointer'>Home</li>
                <li className='hover:text-gray-800 cursor-pointer'>About Us</li>
                <li className='hover:text-gray-800 cursor-pointer'>Delivery</li>
                <li className='hover:text-gray-800 cursor-pointer'>Privacy Ploicy</li>
                
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='hover:text-gray-800 cursor-pointer'>+91 843232xxxx</li>
                <a href="mailto:forever@gmail.com"><li className='hover:text-gray-800 cursor-pointer'>forever@gmail.com</li></a>
            </ul>
        </div>
        
      </div>
      <div>
            <hr />
            <p className='text-gray-500 text-sm text-center py-5'>
                Copyright 2025@ Forever. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
