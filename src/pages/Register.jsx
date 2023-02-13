import React from 'react'
import { AlertEmptyField } from '../components/AlertEmptyField'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { useSelector } from 'react-redux'

const stepOptions = [
  'Nome e Contato',
  'Endereço',
  'Dados Pessoais',
  'Concluído'
]

export function Register() {
  const state = useSelector((state) => state.alertEmptyField)

  return (
    <section className='h-full w-full transacao flex flex-col'>
      <Header stepOptions={stepOptions} />
      <Form stepOptions={stepOptions} />
      {state && <AlertEmptyField />}
    </section>
  )
}
