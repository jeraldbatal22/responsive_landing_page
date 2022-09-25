import React from 'react'
import Button from '../InputForm/Button'
import Input from '../InputForm/Input'

const ContactForm = () => {
  return (
    <div className='mx-0 sm:mx-0 md:mx-0 lg:mx-24'>
      <div className='flex flex-col gap-9 p-9 sm:p-9 md:p-9 lg:p-20'>
        <div className='flex gap-10'>
          <div className='flex-1'>
            <Input
              inputClassName="bg-gray-100"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className='flex-1 '>
            <Input
              inputClassName="bg-gray-100"
              type="email"
              placeholder="Email Address"
            />
          </div>
        </div>
          <Input
            inputClassName="bg-gray-100"
            type="text-area"
            placeholder="Email Address"
          />
          <Button title="SEND MESSAGE" className='bg-blue-500 py-2 px-5 text-sm text-white rounded-md'/>
      </div>
    </div>
  )
}

export default ContactForm