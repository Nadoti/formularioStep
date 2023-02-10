import React from "react"
import { Register } from "./pages/Register"
import { ListClient } from "./pages/ListClient"


function App() {

  const [newClient, setNewClient] = React.useState(false)
  const [home, setHome] = React.useState(true)

  return (
    <section className={`bg-gray-100 h-screen  ${!newClient && 'grid grid-cols-[_minmax(100px,_300px)_minmax(300px,_1fr)]'} `}>
      {!newClient && (
        <>
          <aside className="flex items-center justify-center flex-col gap-12 px-12">
            <button
              className="bg-blue-600 py-2 rounded-2xl text-lg font-bold text-gray-100 w-full transition duration-300 hover:brightness-90 active:scale-110 "
              onClick={() => setNewClient(true)}
            >
              Novo Cliente
            </button>
            <button
              className="border-2 border-blue-600 py-2 rounded-2xl text-lg font-bold text-blue-600 w-full transition duration-300 hover:bg-blue-600 hover:text-gray-100 hover:scale-105"
              onClick={() => {
                setNewClient(false)
                setHome(false)
              }}
            >
              Lista de Clientes
            </button>
          </aside>
          {home ? (<div className="flex items-center justify-center">
            <h1 className="text-5xl text-gray-500">Cadastre um novo cliente na nossa <em className="text-blue-500 font-bold">plataforma</em></h1>
          </div>)
            : (
              <ListClient />
            )}
        </>
      )}

      {
        newClient && (
          <div className="w-full h-full ">
            <Register setNewClient={setNewClient} />
          </div>
        )
      }

    </section >

  )
}

export default App
