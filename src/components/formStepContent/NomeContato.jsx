import React from "react";
import { InputForm } from "../InputForm";
import { nomeContato } from '../../data/valueForm'
import { useSelector } from 'react-redux'


export function NomeContato() {

  const state = useSelector((state) => state.userSlice)

  return (
    <div className='w-full flex flex-col gap-20 transacaoForm'>
      {nomeContato?.map(value => (
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