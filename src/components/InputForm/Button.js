import React from 'react'

const Button = ({ title, icon, className, style, onClick }) => {
  return (
    <div className='flex justify-center'>
      <div onClick={onClick} className={`${className} text-blue-500 font-semibold text-sm gap-5 cursor-pointer`} style={{...style}}>
        <button>{title}</button>
        {icon}
      </div>
    </div>
  )
}

export default Button