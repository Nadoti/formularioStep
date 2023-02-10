import React from 'react'

export function LoadingBarsStep({ step, currentStep }) {
  let status = currentStep === step
    ? 'active'
    : currentStep < step ? 'inactive' : 'complete';
  return (
    <div className={`${status === 'complete' | status === 'active' && 'bg-blue-500'} content=[""] w-full h-1 `} />
  )
}
