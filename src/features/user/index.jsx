import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
  nome: {
    value: '',
    error: ''
  },
  sobrenome: {
    value: '',
    error: ''
  },
  email: {
    value: '',
    error: ''
  },
  telefone: {
    value: '',
    error: ''
  },
  cep: {
    value: '',
    error: ''
  },
  endereco_1: {
    value: '',
    error: ''
  },
  endereco_2: {
    value: '',
    error: ''
  },
  dataNascimento: {
    value: '',
    error: ''
  },
  cpf: {
    value: '',
    error: ''
  },
  rendaMensal: {
    value: '',
    error: ''
  },
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    changeValueInput: (state, action) => {
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          error: action.payload.error
        }
      }
    },
    setAddressInput: (state, action) => {
      return {
        ...state,
        endereco_1: {
          value: `${action.payload.value.logradouro}, n°:  ,${action.payload.value.bairro}, ${action.payload.value.localidade}-${action.payload.value.uf}`,
          error: ''
        }
      }
    },
    setAddressError: (state, action) => {
      return {
        ...state,
        cep: {
          value: '',
          error: action.payload.error
        }
      }
    }
  }
})

export const { changeValueInput, setAddressInput, setAddressError } = userSlice.actions

export default userSlice.reducer