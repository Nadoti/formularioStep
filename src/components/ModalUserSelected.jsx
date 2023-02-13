import React from 'react'

export function ModalUserSelected({ userSelected, setIsOpenModalUserSelected }) {

  function closeModal() {
    setIsOpenModalUserSelected(false)
  }

  return (
    <section className='absolute flex items-center justify-center transacaoForm w-full h-full bg-[rgba(0,0,0,0.4)] max-[768px]:py-10 max-[768px]:px-4 max-[768px]:h-screen'>
      <div className='bg-gray-200 py-5 px-10 relative rounded-2xl h-96 items-center justify-center flex max-[768px]:h-full '>
        <button
          onClick={closeModal}
          className='absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full hover:scale-110 transition duration-300'
        >
          X
        </button>
        <div className='flex items-center justify-between gap-40 max-[768px]:flex-col max-[768px]:gap-4 max-[768px]:h-full max-[768px]:items-baseline max-[768px]:justify-start'>
          <div className='flex flex-col gap-4 '>
            <span>
              nome: {userSelected?.nome.value}
            </span>
            <span>
              sobrenome: {userSelected?.sobrenome.value}
            </span>
            <span>
              email: {userSelected?.email.value}
            </span>
            <span>
              telefone: {userSelected?.telefone.value}
            </span>
            <span>
              cpf: {userSelected?.cpf.value}
            </span>
          </div>

          <div className='flex flex-col gap-4 '>
            <span>
              cep: {userSelected?.cep.value}
            </span>
            <span>
              endereço 1: {userSelected?.endereco_1.value}
            </span>
            <span>
              endereço 2:{userSelected?.endereco_2.value}
            </span>
            <span>
              data de nascimento: {userSelected?.dataNascimento.value}
            </span>
            <span>
              renda mensal: {userSelected?.rendaMensal.value}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
