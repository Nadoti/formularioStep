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

export function InputFormComponent({ name, value, onChange, type, label, placeholder, state, error, maxLength }) {
  const dispatch = useDispatch()
  const [checkboxEndereco, setCheckboxEndereco] = React.useState(false)

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
  const isEndereco2 = name === 'endereco_2'

  const handleKeyUp = React.useCallback((keyup) => {
    maskForm(keyup)
  }, [name])

  function checkboxOnChange({ target }) {
    target.checked ? dispatch(changeValueInput({ name: 'endereco_2', value: 'Não Possui', error: "" })) : dispatch(changeValueInput({ name: 'endereco_2', value: '', error: "" }))
    setCheckboxEndereco(target.checked)
  }

  function verifyChecked(val) {
    if (val) return true
  }

  return (
    <div className='w-full flex items-end'>
      <label className='text-gray-400 w-full'>
        {label}
        <input
          onKeyUp={handleKeyUp}
          onBlur={onBlur}
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={checkboxEndereco}
          className="bg-transparent border-b-2 outline-none w-full transition-all duration-300 focus:border-blue-500 focus:label_text-red-500 text-blue-500  placeholder:text-blue-200 inputForm disabled:cursor-not-allowed"
        />
        {error && <p className='text-xs text-red-600 font-bold'>{error}</p>}
      </label>
      {isEndereco2 &&
        <label htmlFor="" className='flex items-center w-full text-right flex-[0_2_20%] text-[12px] text-gray-400 py-2 px-1 rounded-2xl gap-2 max-[768px]:text-[10px] max-[768px]:flex-[0_2_60%]'>
          <input
            type="checkbox"
            value='endereco_2'
            checked={verifyChecked(state.endereco_2.value)}
            onChange={checkboxOnChange}
          />
          Não Possuo
        </label>
      }
      {isCep &&
        <div className='w-full text-right flex-[0_2_20%] max-[768px]:flex-[0_2_60%]'>
          <a
            className='text-[12px] text-gray-400 hover:bg-gray-200 hover:text-purple-500 py-2 px-1 rounded-2xl max-[768px]:text-[10px]'
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
