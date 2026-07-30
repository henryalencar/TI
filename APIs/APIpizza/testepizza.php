<?php

require_once __DIR__ . "/Config/Database.php";
require_once __DIR__ . "/Models/Pizza.php";

use Apipizza\Config\Database;
use Apipizza\Models\Pizza;

$bancoDados= new Database();
$conexao = $bancoDados->getConnection();

echo "<h1>Testando Conexão e Modelo</h1>";
 
if (!$conexao) {
    echo "<p style='color: red;'>Falha na conexão.</p>";
    die(); // Encerra o script se não houver conexão
}
 
echo "<p style='color: green;'>Conexão bem-sucedida!</p>";
 
echo "<h2>Criando um objeto Pizza...</h2>";
 
// Criamos uma instância da classe Pizza, passando a conexão com o banco
$pizza = new \Apipizza\Models\Pizza($conexao);
 
// Atribuímos valores às suas propriedades públicas
$pizza->__set('nome', 'Margherita');
$pizza->__set('ingredientes', 'Mussarela, fatias de tomate e manjericão fresco');
$pizza->setValor(42.50);
 
// Vamos inspecionar o objeto!
echo "<pre>";
print_r($pizza);
echo "</pre>";
 
 
 