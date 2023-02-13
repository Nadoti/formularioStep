import React from "react";
import { InputFormComponent } from "../InputFormComponent";
import { nomeContato } from '../../data/valueForm'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeObjectData } from "../../features/takeObjectInput";


export function NomeContato() {
  const state = useSelector((state) => state.userSlice)
  const dispatch = useDispatch()

  React.useEffect(() => {
    let setDataObject = {}
    nomeContato.forEach((data) => {
      setDataObject = { ...setDataObject, [data.name]: data.name }
    })
    dispatch(changeObjectData(setDataObject))
  }, [])

  return (
    <div className='w-full flex flex-col gap-20 transacaoForm'>
      {nomeContato?.map(value => (
        <InputFormComponent
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