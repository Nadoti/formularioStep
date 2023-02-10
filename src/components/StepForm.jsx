import React from 'react'
import { InputForm } from './InputForm'

export default function StepForm() {

  const [step, setStep] = React.useState(1)

  function stepDisplayChose(step) {
    switch (step) {
      case 1:
        return React.lazy(() => import('./formStepContent/NomeContato'))
      case 2:
        return React.lazy(() => import('./formStepContent/Address'))
      case 3:
        return React.lazy(() => import('./formStepContent/PersonalData'))
      case 4:
        return React.lazy(() => import(''))
      default:
    }
  }

  const Component = stepDisplayChose(step)

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10'>
      <div className='w-full flex flex-col gap-20 '>
        <React.Suspense>
          <Component />
        </React.Suspense>
      </div>
    </div>
  )
}
