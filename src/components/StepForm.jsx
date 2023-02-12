import React from 'react'
import { Address } from './formStepContent/Address'
import { EndStep } from './formStepContent/EndStep'
import { NomeContato } from './formStepContent/NomeContato'
import { PersonalData } from './formStepContent/PersonalData'
import { useSelector } from 'react-redux'

export default function StepForm() {

  const state = useSelector((state) => state.stepSlice.step)

  function stepDisplayChose(step) {
    switch (step) {
      case 1:
        return <NomeContato />
      case 2:
        return <Address />
      case 3:
        return <PersonalData />
      case 4:
        return <EndStep />
      default:
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10'>
      {stepDisplayChose(state)}
    </div>
  )
}
