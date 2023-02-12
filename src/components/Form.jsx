import React from 'react'
import StepForm from './StepForm'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increaseStep, decreaseStep } from '../features/step'

export function Form() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.stepSlice.step)

  function handleIncreaseStep() {
    console.log('indo')
    console.log(state)
    dispatch(increaseStep())
  }

  function handleDecreaseStep() {
    dispatch(decreaseStep())
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='w-full max-w-3xl h-full my-0 mx-auto flex flex-col items-center justify-center gap-16 px-8'
    >
      <StepForm />
      <div className='flex items-center justify-center gap-10 w-full'>
        <button
          onClick={handleDecreaseStep}
          className='bg-red-400 py-2 px-6 text-gray-100 rounded-2xl'
        >Voltar
        </button>
        <button
          onClick={handleIncreaseStep}
          className='bg-blue-400 py-2 px-6 text-gray-100 rounded-2xl'
        >
          Avançar
        </button>
      </div>
    </form>
  )
}
