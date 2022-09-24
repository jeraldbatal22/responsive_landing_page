import React from 'react'
import Layout from '../components/Layout'

const Signin = () => {
  return (
    <Layout>
      <div className='h-screen'>
        <div className='bg-login-background w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center'>
          <h1 className='text-white text-4xl'>Login</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Signin