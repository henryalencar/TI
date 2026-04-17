<?php
// valor  URL
$salario = $_GET['salario'];

echo 'Seu salArio é: ' . $salario . '<br>';

if ($salario < 2000) {
    echo 'Você está SEM de imposto!';
} else if ($salario >= 2000 && $salario < 5000) {
    echo 'Você paga imposto!';
} else {
    echo 'Você paga mais imposto!';
}
?>