import React from 'react'

export function ListClient() {
  return (
    <section className='flex items-center justify-center flex-col transacao'>
      <h3 className='text-3xl text-gray-300 font-bold mb-8'>Lista de clientes cadastrados</h3>
      <div className='w-full max-w-7xl h-[40rem] my-0 mx-auto border-2 border-gray-300 rounded-2xl flex flex-col overflow-hidden'>
        <div className='w-full py-2 px-4 text-right border-t-8 border-blue-500 border-b-2 border-b-gray-300'>
          <input
            className='outline-none border-2 border-transparent rounded-2xl py-1 px-4 focus:border-blue-500 text-sm placeholder:text-gray-300'
            type="text"
            placeholder='buscar...'
          />

        </div>

        <div className='overflow-y-scroll h-full scrollTabel'>
          <table className='w-full border-collapse'>
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
              <tr>
                <td className='py-5 px-4 '>Douglas</td>
                <td className='py-5 px-4'>45987977894</td>
                <td className='py-5 px-4'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4'>11/05/1996</td>
                <td className='py-5 px-4'>R$1.500,00</td>
              </tr>
              <tr onClick={() => console.log('teste')} className='hover:bg-gray-200 cursor-pointer'>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>

              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>
              <tr>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>Douglas</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>45987977894</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>dodo_nadoti@hotmail.com</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>11/05/1996</td>
                <td className='py-5 px-4 border-t-2 border-b-2 border-gray-300'>R$1.500,00</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </section>
  )
}
