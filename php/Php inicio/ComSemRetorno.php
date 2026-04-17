<?php
// faça um  arquivo com uma fução COM e uma SEM retorno(return)

//SEM retorno
function mostrarUmaMensagem() {
    echo "Essa função não usa return
    <hr>";
}

//COM retorno
function soma($a, $b, $c) {
    return $a + $b + $c;
}

// Chamando
mostrarUmaMensagem();
$resultado = soma(2, 2 ,2 );
echo "Resultado: $resultado";

?>
