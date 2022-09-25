import React, { useState } from 'react'
import HomeFooter from '../components/HomeFooter'
import Button from '../components/InputForm/Button'
import Checkbox from '../components/InputForm/Checkbox'
import Input from '../components/InputForm/Input'
import Layout from '../components/Layout'

const Signup = () => {
  const [isRememberMe, setIsRememberMe] = useState(false)
  return (
    <Layout>
      <div className='h-screen'>
        <div className='bg-login-background w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center'>
          <div className='flex flex-col gap-5 bg-white rounded-lg w-96'>
            <div className='text-white text-2xl bg-blue-500 w-11/12 m-auto -mt-10 rounded-lg flex justify-center shadow-2xl'>
              <h1 className='px-5 py-7 font-bold'>Register</h1>
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-lg'>
              <Input
                icon={<i className="fa-solid fa-user text-gray-400 text-lg"></i>}
                type="text"
                placeholder="Full Name"
              />

              <Input
                icon={<i className="fa-solid fa-envelope text-gray-400 text-lg"></i>}
                type="email"
                placeholder="Email Address"
              />
             
             <Input
                icon={<i className="fa-solid fa-lock text-gray-400 text-lg"></i>}
                type="password"
                placeholder="Password"
              />
              <Button title="REGISTER" className="py-3 px-6 rounded-md hover:bg-blue-100"/>
            </div>
          </div>
          <HomeFooter/>
        </div>
      </div>
    </Layout>
  )
}

export default Signup