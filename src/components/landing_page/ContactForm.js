import React from 'react'

const ContactForm = () => {
  return (
    <div className='mx-0 sm:mx-0 md:mx-0 lg:mx-24'>
      <div className='flex flex-col gap-9 p-9 sm:p-9 md:p-9 lg:p-20'>
        <div className='flex gap-10'>
          <div className='flex-1'>
            <input type="email" placeholder='Full Name' className='border-b-2 border-gray-200 w-full bg-gray-100 focus:outline-none focus:border-blue-500'/>
          </div>
          <div className='flex-1 '>
            <input type="email" placeholder='Email Address' className='border-b-2 border-gray-200 w-full bg-gray-100 focus:outline-none focus:border-blue-500'/>
          </div>
        </div>
        <textarea placeholder='Message' className='border-b-2 border-gray-200 bg-gray-100 h-48 focus:outline-none focus:border-blue-500'/>
        <div className='flex justify-center'>
          <button className='bg-blue-500 py-2 px-5 text-sm text-white rounded-md'>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm