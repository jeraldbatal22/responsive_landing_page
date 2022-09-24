import React from 'react'

const HeaderContent = () => {
  return (
    <div className='relative h-screen'>
      <div className='bg-landing-background absolute top-0 w-full h-full flex items-center justify-center bg-no-repeat bg-cover bg-center'>
        <div className='flex items-center justify-center text-center flex-col gap-8 text-white w-full sm:w-full lg:w-6/12 w p-3'>
          <h1 className='leading-snug font-bold text-5xl'>Your story starts with us.</h1>
          <p className='text-gray-200 text-center text-xl'>This is a simple example of a Landing Page you can build using Material Tailwind. It features multiple components based on the Tailwind CSS and Material Design by Google.</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent