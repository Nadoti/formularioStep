import React from "react"
import { Register } from "./pages/Register"
import { ListClient } from "./pages/ListClient"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleListClient, handleNewClient } from "./features/changePage"
import { ModalUserSelected } from "./components/ModalUserSelected"

function App() {
  const [isOpenModalUserSelected, setIsOpenModalUserSelected] = React.useState(false)
  const [userSelected, setUserSelected] = React.useState({})

  const dispatch = useDispatch()
  const { home, newClient } = useSelector((state) => state.changePageSlice)

  function handlePageNewClient() {
    dispatch(handleNewClient())
  }

  function handlePageListClient() {
    dispatch(handleListClient())
  }

  return (
    <section
      className={`bg-gray-100 h-screen  ${!newClient && 'grid grid-cols-[_minmax(100px,_300px)_minmax(300px,_1fr)]'} max-[768px]:flex max-[768px]:flex-col max-[768px]:grid-cols-none `}>
      {!newClient && (
        <>
          <aside className="flex items-center justify-center flex-col gap-12 px-12 max-[768px]:mt-4 max-[768px]:gap-4">
            <button
              className="bg-blue-600 py-2 rounded-2xl text font-bold text-gray-100 w-full transition duration-300 hover:brightness-90 active:scale-110 max-[768px]:py-1 max-[768px]:text-base"
              onClick={handlePageNewClient}
            >
              Novo Cliente
            </button>
            <button
              className="border-2 border-blue-600 py-2 rounded-2xl text-lg font-bold text-blue-600 w-full transition duration-300 hover:bg-blue-600 hover:text-gray-100 hover:scale-105 max-[768px]:py-1 max-[768px]:text-base"
              onClick={handlePageListClient}
            >
              Lista de Clientes
            </button>
          </aside>
          {home ? (<div className="flex items-center justify-center max-[768px]:w-full max-[768px]:h-full">
            <h1 className="text-5xl text-gray-500 max-[768px]:text-center max-[768px]:text-2xl">Cadastre um novo cliente na nossa <em className="text-blue-500 font-bold">plataforma</em></h1>
          </div>)
            : (
              <ListClient
                setUserSelected={setUserSelected}
                setIsOpenModalUserSelected={setIsOpenModalUserSelected}
              />
            )}
        </>
      )}

      {
        newClient && (
          <div className="w-full h-full ">
            <Register />
          </div>
        )
      }

      {isOpenModalUserSelected
        && <ModalUserSelected
          userSelected={userSelected}
          setIsOpenModalUserSelected={setIsOpenModalUserSelected}
        />}
    </section >

  )
}

export default App
