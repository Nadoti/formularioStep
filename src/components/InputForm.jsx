import React from 'react'
import { maskForm } from '../mask/mask'
import { useDispatch } from 'react-redux'
import { changeValueInput, setAddressInput, setAddressError } from '../features/user/index'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  cep: {
    regex: /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/,
    message: "Preencha um cep válido"
  }
}

export function InputForm({ name, value, onChange, type, label, placeholder, state, error, maxLength, ref = null }) {
  const dispatch = useDispatch()

  function validateForm(val, name) {
    if (val.length === 0) {
      dispatch(changeValueInput({ name: name, value: val, error: "campo não pode ser vazio" }))
      return false
    } else if (types[name] && !types[name].regex.test(val)) {
      dispatch(changeValueInput({ name: name, value: val, error: types[name].message }))
      return false
    } else {
      dispatch(changeValueInput({ name: name, value: val, error: "" }))
      return true
    }
  }

  function onChange({ target }) {
    if (state[target.name].error) validateForm(target.value, target.name)
    dispatch(changeValueInput({ value: target.value, name: target.name }))
    if (target.name === 'cep' && target.value.length === 9) {
      const changeCep = target.value.replace("-", "")
      fetch(`https://viacep.com.br/ws/${changeCep}/json/`)
        .then(valor => valor.json())
        .then(json => {
          if (json.erro) {
            dispatch(setAddressError({ error: 'Cep Inválido' }))
            return
          }
          dispatch(setAddressInput({ value: json }))
        })
    }
  }

  function onBlur({ target }) {
    validateForm(target.value.trim(), target.name)
  }

  const isCep = name === 'cep'

  const handleKeyUp = React.useCallback((keyup) => {
    maskForm(keyup)
  }, [name])

  return (
    <div className='w-full flex items-end'>
      <label className='text-gray-400 w-full'>
        {label}
        <input
          ref={ref}
          onKeyUp={handleKeyUp}
          onBlur={onBlur}
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          required
          className="bg-transparent border-b-2 outline-none w-full transition-all duration-300 focus:border-blue-500 focus:label_text-red-500 text-blue-500  placeholder:text-blue-200 inputForm"
        />
        {error && <p className='text-xs text-red-600 font-bold'>{error}</p>}
      </label>

      {isCep &&
        <div className='w-full text-right flex-[0_2_20%] '>
          <a
            className='text-[12px] text-gray-400 hover:bg-gray-200 hover:text-purple-500 py-2 px-1 rounded-2xl'
            href='https://buscacepinter.correios.com.br/app/endereco/index.php'
            target='_blank'
          >
            Não sei meu CEP
          </a>
        </div>
      }
    </div>
  )
}
