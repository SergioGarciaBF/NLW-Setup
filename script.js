// Colocar uma variável no formulário
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //Pega o dia de hoje no formato brasileiro retirando os 5 últimos digitos
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists){
    alert('Dia já registrado anteriormente ❌')
    return
  }

  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) ||  {} //Objeto vazio
nlwSetup.setData(data)
nlwSetup.load()