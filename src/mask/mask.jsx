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

function Formatar(valor) {
  const v = ((valor.currentTarget.value.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');

  const m = v[0].split('').reverse().join('').match(/.{1,3}/g);

  for (let i = 0; i < m.length; i++)
    m[i] = m[i].split('').reverse().join('') + '.';

  const r = m.reverse().join('');
  console.log('caindo aki')

  valor.currentTarget.value = 'R$ ' + r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
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
    case 'rendaMensal':
      return Formatar(keyup)
    default:
      return keyup
  }
}

