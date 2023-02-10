import React from 'react'
import StepForm from './StepForm'

export function Form() {
  return (
    <form className='w-full max-w-3xl h-full my-0 mx-auto flex flex-col items-center justify-center gap-16 px-8'>
      <StepForm />
      <div className='flex items-center justify-center gap-10 w-full'>
        <button className='bg-red-400 py-2 px-6 text-gray-100 rounded-2xl'>Voltar</button>
        <button className='bg-blue-400 py-2 px-6 text-gray-100 rounded-2xl'>Avançar</button>
      </div>
    </form>
  )
}
