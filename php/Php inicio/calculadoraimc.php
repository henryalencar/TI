<?php
//valores da URL
$peso = $_GET['peso'];
$altura = $_GET['altura'];
$imc = $peso / ($altura * $altura);

echo 'seu IMC é:' .round($imc,2) .'</br>';

if ($imc < 18.5) {
    echo 'Você estaa abaixo do peso!';
} else if ($imc >= 18.5 || $imc < 24.9) {
    echo 'Você estaa com peso normal!';
} else {
    echo 'Você estaa acima do peso!';
}
?>