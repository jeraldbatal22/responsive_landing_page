import React from 'react'

const HomeFooter = () => {
  return (
    <section className='absolute bottom-0 inset-x-0 flex flex-col sm:flex-col lg:flex-row items-center justify-around gap-5 p-10 text-white max-w-full'>
      <div className='flex flex-col items-center sm:items-center gap-5'>
        <div className='flex-1 flex flex-row sm:flex-row text-sm font-semibold gap-5'>
          <span>MIT License</span>
          <span>Contribute</span>
          <span>Code of Conduct</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className=''>
        <div className='text-center text-sm font-bold'>
          <a href='##'>Copyright © 2022 Material Tailwind by Creative Tim.</a>
        </div>
      </div>
    </section>
  )
}

export default HomeFooter