import React from 'react'
import StepForm from './StepForm'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increaseStep, decreaseStep, restartStep } from '../features/step'
import { changeAlertOpen } from '../features/alertEmptyField'
import { handleListClient } from '../features/changePage'
import { changeValueInput } from '../features/user'

export function Form({ stepOptions }) {
  const dispatch = useDispatch()
  const stateStep = useSelector((state) => state.stepSlice.step)
  const stateDataInput = useSelector((state) => state.userSlice)
  const stateTakeObject = useSelector((state) => state.takeObjectInputSlice)


  function handleIncreaseStep() {
    const takeLocal = JSON.parse(localStorage.getItem('listUser'))
    if (takeLocal) {
      takeLocal.filter(val => {
        val.cpf.value === stateDataInput.cpf.value && dispatch(changeValueInput({ name: 'cpf', value: '', error: 'CPF já cadastrado!' }))
        return
      })
    }

    for (const key in stateTakeObject) {
      if (stateDataInput[key].value === '') {
        dispatch(changeAlertOpen())
        return
      }
    }
    if (stateStep < Object.keys(stepOptions).length) {
      dispatch(increaseStep())
    }
  }

  function handleDecreaseStep() {
    if (stateStep !== 1) {
      dispatch(decreaseStep())
    }
  }

  function handleSubmitForm() {
    let takeGetItemLocalStorage = JSON.parse(localStorage.getItem('listUser'))
    if (takeGetItemLocalStorage.length) {
      takeGetItemLocalStorage.push(stateDataInput)
    } else {
      const setNewUser = [stateDataInput]
      localStorage.setItem('listUser', JSON.stringify(setNewUser))
    }
    localStorage.setItem('listUser', JSON.stringify(takeGetItemLocalStorage))
    dispatch(handleListClient())
    dispatch(restartStep())
    Object.keys(stateDataInput).forEach((val) => {
      dispatch(changeValueInput({ value: '', name: val }))
    })

  }

  return (
    <section
      className='w-full max-w-3xl h-full my-0 mx-auto flex flex-col items-center justify-center gap-16 px-8'
    >
      <StepForm />
      <div className='flex items-center justify-center gap-10 w-full'>

        {stateStep === stepOptions.length ? '' : (<button
          type='button'
          onClick={handleDecreaseStep}
          className='bg-red-400 py-2 px-6 text-gray-100 rounded-2xl'
        >Voltar
        </button>)}
        {stateStep === stepOptions.length
          ? (<button
            type='button'
            onClick={handleSubmitForm}
            className='bg-blue-400 py-2 px-6 text-gray-100 rounded-2xl'
          >
            Voltar ao menu principal
          </button>)
          : (<button
            type='button'
            onClick={handleIncreaseStep}
            className='bg-blue-400 py-2 px-6 text-gray-100 rounded-2xl'
          >
            Avançar
          </button>)
        }
      </div>
    </section>
  )
}
