import React from 'react'

export function InputForm({ name }) {
  return (
    <div className='w-full'>
      <label className='text-gray-400'>
        {name}
      </label>
      <input
        type="text"
        placeholder='Informe seu Nome'
        className="relative bg-transparent border-b-2 outline-none w-full transition-all duration-300 focus:border-blue-500 focus:label_text-red-500 text-blue-500  placeholder:text-blue-200 inputForm"
      />
    </div>
  )
}
