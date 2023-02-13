import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { attStateList } from '../features/listRegisteredUsers'

export function ListClient({ setIsOpenModalUserSelected, setUserSelected }) {
  const stateListUsersRegistered = useSelector((state) => state.listRegisteredUsers)
  const dispatch = useDispatch()




  React.useEffect(() => {
    let takeLocalStorage = JSON.parse(localStorage.getItem('listUser'))
    if (takeLocalStorage) dispatch(attStateList(takeLocalStorage))
  }, [])

  function handleShowClientSelected(resp) {
    const findUser = stateListUsersRegistered.find(val => val.cpf.value === resp.currentTarget.id)
    setUserSelected(findUser)
    setIsOpenModalUserSelected(true)
  }

  return (
    <section className='flex items-center justify-center flex-col px-4 transacao max-[768px]:px-4 max-[768px]:h-[35rem]'>
      <h3 className='text-3xl text-gray-300 font-bold mb-8 max-[768px]:text-lg max-[768px]:mt-4'>Lista de clientes cadastrados</h3>
      <div className='w-full max-w-7xl h-[40rem] my-0 mx-auto border-2 border-gray-300 rounded-2xl flex flex-col overflow-hidden  max-[768px]:h-full '>
        <div className='w-full py-2 px-4 text-right border-t-8 border-blue-500 border-b-2 border-b-gray-300' />
        <div className='overflow-y-scroll h-full scrollTabel '>
          <table className='w-full border-collapse '>
            <thead className=''>
              <tr className='text-left text-blue-500'>
                <th className='py-3 px-4 border-b-2 border-gray-300'>Nome</th>
                <th className='py-3 px-4 border-b-2 border-gray-300'>CPF</th>
                <th className='py-3 px-4 border-b-2 border-gray-300'>E-mail</th>
                <th className='py-3 px-4 border-b-2 border-gray-300'>Data de Nascimento</th>
                <th className='py-3 px-4 border-b-2 border-gray-300'>Renda Mensal</th>
              </tr>
            </thead>
            <tbody>
              {stateListUsersRegistered?.map(result => (
                <tr
                  key={result.cpf.value}
                  id={result.cpf.value}
                  onClick={handleShowClientSelected}
                  className='hover:bg-gray-200 cursor-pointer'
                >
                  <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300 max-[768px]:py-3 max-[768px]:px-2 max-[768px]:text-[14px]'>{result.nome.value}</td>
                  <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300 max-[768px]:py-3 max-[768px]:px-2 max-[768px]:text-[14px]'>{result.cpf.value}</td>
                  <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300 max-[768px]:py-3 max-[768px]:px-2 max-[768px]:text-[14px]'>{result.email.value}</td>
                  <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300 max-[768px]:py-3 max-[768px]:px-2 max-[768px]:text-[14px]'>{result.dataNascimento.value}</td>
                  <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>{result.rendaMensal.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
