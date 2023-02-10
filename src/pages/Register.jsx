import React from 'react'
import { Form } from '../components/Form'
import { Header } from '../components/Header'

export function Register({ setNewClient }) {
  const [step, setStep] = React.useState(true)

  return (
    <section className='h-full w-full transacao flex flex-col'>
      <Header />
      <Form />
    </section>
  )
}
