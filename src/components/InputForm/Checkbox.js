import React from 'react'

const Checkbox = ({ title, isDisabled=false, onChange }) => {
  return (
    <button className='flex items-center gap-4 text-gray-400' onClick={onChange}>
      <input type="checkbox" checked={isDisabled} className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
      <label className='cursor-pointer'>{title}</label>
    </button>
  )
}

export default Checkbox