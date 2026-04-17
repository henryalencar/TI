<?php
//valores da URL
$nome = $_GET['nome'];
$peso = $_GET['peso'];
$altura = $_GET['altura'];

$imc = $peso / ($altura * $altura);
$imc = round($imc,2);

echo "Oi $nome, seu IMC é <strong>$imc</strong><br>";


if ($imc < 18.5) {
    echo 'Você estaa abaixo do peso!';
} else if ($imc >= 18.5 || $imc < 24.9) {
    echo 'Você estaa com peso normal!';
} else {
    echo 'Você estaa acima do peso!';
}
?>