import React from 'react'
import { CheckIcon } from './CheckIcon';
import { motion } from 'framer-motion'

export function Step({ step, currentStep, infoStep, stepOptions }) {
  let status = currentStep === step
    ? 'active'
    : currentStep < step ? 'inactive' : 'complete';

  return (
    <div className='relative'>

      <div className={`flex items-center mr-12 ${step !== stepOptions.length && 'after:w-6 after:h-[3px] after:bg-gray-400 after:content-[""] after:ml-6'}`}>
        <motion.div
          initial={false}
          animate={status}
          transition={{
            duration: 0.2
          }}
          variants={{
            inactive: {
              backgroundColor: '#d1d5db',
              borderColor: '#fff',
              color: '#9ca3af'
            },
            active: {
              backgroundColor: '#bfdbfe',
              borderColor: '#3b82f6',
              color: '#3b82f6',
              fontWeight: 'bold'
            },
            complete: {
              backgroundColor: '#3b82f6',
              borderColor: '#3b82f6',
              color: '#3b82f6'
            },
          }}
          className='w-7 h-7 rounded-full flex items-center justify-center'
        >
          {status === 'complete' ? (
            <CheckIcon className='h-6 w-6 text-white' />
          ) : (
            <span className='font-bold'>{step}</span>
          )}
        </motion.div>
        <p className='text-xs ml-2 font-bold text-gray-500'>{infoStep}</p>
      </div>
    </div>
  )
}
