//01
function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
// Função principal
function calmedia() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let n3 = parseFloat(document.getElementById('num3').value);

    let resultadoElement = document.getElementById('resultado');

    // vai verifica se todos os campos estão preenchidos
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoElement.innerText = 'coloque todos os numeros';
        resultadoElement.style.color = 'red';
        return;
    }

    let resultado = media(n1, n2, n3);
    resultadoElement.innerText = `A media é: ${resultado.toFixed(2)}`;
    resultadoElement.style.color = 'green';
}
