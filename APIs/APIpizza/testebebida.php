<?php

require_once __DIR__ . "/Config/Database.php";
require_once __DIR__ . "/Models/Bebida.php";

use Apipizza\Config\Database;
use Apipizza\Models\Bebida;

$bancoDados = new Database();
$conexao = $bancoDados->getConnection();

echo "<h1>Testando Conexão e Modelo</h1>";

if (!$conexao) {
    echo "<p style='color: red;'>Falha na conexão.</p>";
    die(); // Encerra o script se não houver conexão
}

echo "<p style='color: green;'>Conexão bem-sucedida!</p>";

echo "<h2>Criando um objeto Bebida...</h2>";

// Criamos uma instância da classe Bebida, passando a conexão com o banco
$bebida = new \Apipizza\Models\Bebida($conexao);

// Atribuímos valores às suas propriedades públicas
$bebida->nome = 'Coca-Cola';
$bebida->tipo = 'Refrigerante';
$bebida->valor = 8.50;

// Vamos inspecionar o objeto!
echo "<pre>"; // A tag <pre> ajuda a formatar a saída do print_r
print_r($bebida);
echo "</pre>";