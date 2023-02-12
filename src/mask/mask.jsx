function maskCPF(e) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4')
  e.currentTarget.value = value
}

export function maskCep(e) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{5})(\d)/, '$1-$2')
  e.currentTarget.value = value
}

export function maskBirthdate(e) {
  e.currentTarget.maxLength = 10
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3')
  e.currentTarget.value = value
}



export function maskPhone(e) {
  e.currentTarget.maxLength = 15
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "").replace(/^(\d{10})/, '$1').replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3')
  e.currentTarget.value = value
}


export function maskForm(keyup) {
  switch (keyup.target.name) {
    case 'cpf':
      return maskCPF(keyup)
    case 'cep':
      return maskCep(keyup)
    case 'dataNascimento':
      return maskBirthdate(keyup)
    case 'telefone':
      return maskPhone(keyup)
    default:
      return keyup
  }
}

