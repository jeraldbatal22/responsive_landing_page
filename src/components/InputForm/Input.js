import React from 'react'

const Input = ({ icon, type, placeholder, className, style, inputStyle, inputClassName }) => {
  return (
    <div className={`${className} flex justify-between items-center border-b-2 border-gray-200 w-full focus:outline-none focus:border-blue-500 mb-12`} style={{...style}}>
      <input type={type} placeholder={placeholder} className={`${inputClassName}  w-full focus:outline-none`} style={{...inputStyle}}/>
      {icon}
    </div>
  )
}

export default Input