let numeros = []
function adicionar() {
    const num = document.getElementById("num")
    const lista = document.getElementById("lista")
    const valor = Number(num.value)

    num.addEventListener('keypress', function (event) {
        if (event.key === 'enter'){
            btnadicionar.click()
        }
    })

    if (valor < 1 && valor > 100 || num.value === '') {
        alert('Digite um numero valido entre 1 e 100')
    } else if (numeros.includes(valor)) {
        alert('Número ja adicionado!')
    } else {
        numeros.push(valor)
        const item = document.createElement('option')
        item.text = `Valor ${valor} adicionado`
        lista.appendChild(item)
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (numeros.length === 0) {
        alert('dicione números antes de finalizar')
        return
    }

    let total = numeros.length
    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    let soma = numeros.reduce((a, b) => a + b, 0)
    let media = soma / total

    const res = document.getElementById("res")
    res.innerHTML = `
        <p>Ao todo temos <strong>${total}</strong> numeros cadastrados.</p>
        <p>O maior valor informado foi <strong>${maior}</strong>.</p>
        <p>o menor valor informado foi <strong>${menor}</strong>.</p>
        <p>Somando todos os valores, temos <strong>${soma}</strong>.</p>
        <p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>
    `
}
