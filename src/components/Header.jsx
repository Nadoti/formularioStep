import React from 'react'
import { Step } from './Step'
import { LoadingBarsStep } from './LoadingBarsStep'
import { useSelector } from 'react-redux'



export function Header({ stepOptions }) {
  const state = useSelector((state) => state.stepSlice.step)


  return (
    <header className='w-full'>
      <div className='max-w-6xl my-0 mx-auto flex items-center justify-end p-8 max-[768px]:p-4 max-[768px]:justify-center'>
        {stepOptions?.map((options, index) => (
          <Step
            key={options}
            step={index + 1}
            currentStep={state}
            infoStep={options}
            stepOptions={stepOptions}
          />
        ))}
      </div>
      <div className='flex'>
        {stepOptions?.map((options, index) => (
          <LoadingBarsStep
            key={options}
            step={index + 1}
            currentStep={state}
          />
        ))}

      </div>
    </header>
  )
}
