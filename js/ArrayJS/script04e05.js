// exercicos 04 e 05

const container = document.getElementById('container')
const nomes = ['Henry', 'Dani', 'Gui']

const nomesMaiusculos = nomes.map(n => n.toUpperCase())  // toUpperCase altera para letreas MAIUSCULAS...

const titulo = document.createElement('h1')
titulo.textContent = 'Nomes Maiúsculos'

const lista = document.createElement('p')
lista.textContent = nomesMaiusculos.join(' ')

container.appendChild(titulo)
container.appendChild(lista)

// exe 05 

titulo.id ='lista-nomes'
lista.classname = 'lista'
