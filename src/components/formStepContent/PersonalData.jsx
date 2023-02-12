import React from 'react'
import { InputForm } from '../InputForm'
import { dadosPessoais } from '../../data/valueForm'
import { useSelector } from 'react-redux'


export function PersonalData() {
  const state = useSelector((state) => state.userSlice)


  return (
    <div className='w-full flex flex-col gap-20 transacaoForm'>
      {dadosPessoais?.map(value => (
        <InputForm
          state={state}
          key={value.id}
          value={state[value.name].value}
          label={value.label}
          name={value.name}
          type={value.type}
          placeholder={value.placeholder}
          error={state[value.name].error}
          maxLength={value.maxLength}
        />
      ))}
    </div>
  )
}
