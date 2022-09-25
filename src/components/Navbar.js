import React, { useState } from 'react'
import Button from './InputForm/Button'

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false)
console.log(isShowNav)
  return (
    <div className='absolute z-20 inset-x-0'>
      <nav className={`relative w-full text-sm flex ${isShowNav ? 'flex-col' : 'flex-row'} flex-col lg:flex-row justify-between sm:justify-around items-center px-5 sm:px-5 lg:px-24 py-3 sm:py-3 lg:py-8 text-white font-semibold`}>
        <div className='flex items-center w-full justify-between'>
          <a href='##' className='p-2'>MATERIAL TAILWIND</a>
          {/* <i onClick={() => { setIsShowNav(!isShowNav)}} class="flex sm:flex lg:hidden fa-sharp fa-solid fa-bars"></i> */}
          <i onClick={() => { setIsShowNav(!isShowNav)}} class="flex lg:hidden fa-sharp fa-solid fa-bars"></i>
        </div>
        {/* <ul className={`${isShowNav ? 'flex flex-col w-full' : 'hidden gap-5'} md:${isShowNav ? 'flex' : 'hidden'} lg:flex`}> */}
        <ul className={`${isShowNav ? '' : 'hidden gap-5'} w-full flex-col sm:flex-col md:flex-col lg:flex-row lg:flex`}>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex gap-3 items-center cursor-pointer`}><li className='fab fa-github text-xl'></li>DOC</li>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex gap-3 items-center cursor-pointer`}><li className='fab fa-github text-xl'></li>COMPONENTS</li>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex gap-3 items-center cursor-pointer`}><li className='fab fa-github text-xl'></li>TEMPLATES</li>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex gap-3 items-center cursor-pointer`}><li className='fab fa-github text-xl'></li>GITHUB</li>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex items-center cursor-pointer`}>ISSUES</li>
          <li className={`${isShowNav ? 'px-6 py-6' : 'p-2'} flex items-center cursor-pointer w-52`}>
            <Button title="FREE DOWNLOAD" className="py-2 px-4 bg-white text-black rounded-lg"/>
            {/* <button className='bg-white text-black py-2 px-4 rounded-md'>FREE DOWNLOAD</button> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar