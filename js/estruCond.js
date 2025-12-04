function calcular(){
    var vel = window.document.getElementById('vel')
 
 
    var resp = window.document.getElementById('resp')
    var velocidade = Number(vel.value)
 
    if (velocidade <= 40) {
        resp.innerText = "Você está dentro da velocidade Permitida!"
    }
 
    else if (velocidade > 40 &&  velocidade <100){
        resp.innerHTML = "Você está acima da velocidade, será <strong> Multado! </strong>"
    }
 
    else {
        resp.innerHTML = "Você está acima da velocidade permitida, será <strong>Multado</strong> e o veículo será <strong>Apreendido!</strong>"
    }
}
