import React from 'react'

const Card = ({icon, title, description, footer, className}) => {
  return (
    <dev className={`bg-white ${className} flex flex-col items-center gap-4 rounded-lg`}>
      {icon}
      <h1 className='font-bold text-xl w-full'>{title}</h1>
      <p className='text-gray-500'>{description}</p>
      {footer}
    </dev>
  )
}

export default Card