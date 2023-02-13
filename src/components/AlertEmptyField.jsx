import React from 'react'
import { useDispatch } from 'react-redux'
import { changeAlertClose } from '../features/alertEmptyField'

export function AlertEmptyField() {
  const dispatch = useDispatch()
  return (
    <div className='absolute bg-[rgba(0,0,0,.3)] w-full h-full flex items-center justify-center transacao'>
      <div className='bg-white py-10 px-10 rounded-xl'>
        <h4 className='text-4xl mb-10 text-red-400'>ERRO !!</h4>
        <p className='text-gray-400 text-lg mb-8'>Preencha todos os Campos.</p>
        <button
          onClick={() => dispatch(changeAlertClose())}
          className='bg-green-400 block my-0 mx-auto py-2 px-8 rounded-xl active:scale-90'
        >
          Ok
        </button>
      </div>
    </div>
  )
}
