import React from 'react'

const LandingFooter = () => {
  return (
    <section className='bg-gray-100 pt-15 '>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-col lg:flex-row items-center sm:items-center gap-5'>
        <div className='flex-1 flex flex-col gap-5 items-center'>
          <h1 className='text-3xl font-bold'>Material Tailwind</h1>
          <p className='text-gray-500 text-md text-center'>Easy to use React components for Tailwind CSS and Material Design.</p>
          <div className="flex gap-5">
            <div className='h-10 w-10 flex items-center justify-center bg-white rounded-full'><i className='fab fa-twitter text-blue-500'></i></div>
            <div className='h-10 w-10 flex items-center justify-center bg-white rounded-full'><i className='fab fa-facebook-f text-blue-500'></i></div>
            <div className='h-10 w-10 flex items-center justify-center bg-white rounded-full'><i className='fab fa-dribbble text-red-500'></i></div>
          </div>
        </div>
        <div className='flex-1 flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5'>
          <ul className='flex-1 flex flex-col gap-2 text-center sm:text-center lg:text-start'>
            <li className='font-bold text-md'>USEFUL LINKS</li>
            <li className='text-gray-500 text-sm'>About Us</li>
            <li className='text-gray-500 text-sm'>Blog</li>
            <li className='text-gray-500 text-sm'>Github</li>
            <li className='text-gray-500 text-sm'>Free Products</li>
          </ul>
          <ul className='flex-1 flex flex-col gap-2 text-center sm:text-center lg:text-start'>
            <li className='font-bold text-md'>OTHER RESOURCES</li>
            <li className='text-gray-500 text-sm'>MIT Lincense</li>
            <li className='text-gray-500 text-sm'>Contribute</li>
            <li className='text-gray-500 text-sm'>Code of Conduct</li>
            <li className='text-gray-500 text-sm'>Contuct Us</li>
          </ul>
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-10 flex flex-col gap-5'>
        <div className=' border-b-2 w-full'></div>
        <div className='text-center text-sm text-gray-500 font-bold pb-4'>
          <a href='##'>Copyright © 2022 Material Tailwind by Creative Tim.</a>
        </div>
      </div>
    </section>
  )
}

export default LandingFooter