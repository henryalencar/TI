<?php
//modelo SOMETENTE COM O SET E GET MAGICO
class Funcionario {
    
    //atributos
    public $nome = null;
    public $sobrenome = null;
    public $telefone = null;
    public $numFilhos = null;
    public $cargo = null;
    public $salario = null;
    public $musica = null;
    public $esporte = null;
    public $altura = null;
    public $peso = null;

    //Método mágico SET
    function __set($atributo, $valor){
        $this->$atributo = $valor;
    }

    //Método mágico GET
    function __get($atributo){
        return $this->$atributo;
    }

    //Resumo
    function resumirCadFunc() {
        return "$this->nome possui $this->numFilhos filho(s)";
    }
}

// 
//  Y
$y = new Funcionario();

$y->__set("nome", "Henry");
$y->__set("numFilhos", 0);
$y->__set("cargo", "TI");
$y->__set("salario", "30.999,00");

echo "Teste funcionário Y: </br>";
echo $y->resumirCadFunc() . "</br>";
echo $y->__get("nome") . " possui " . $y->__get("numFilhos") . " filho(s)</br>";
echo "Seu cargo é " . $y->__get("cargo") . " e recebe R$" . $y->__get("salario");

// 
echo "<hr>";

//  X
$x = new Funcionario();

$x->__set("nome", "Joyci");
$x->__set("telefone", "(13) 996038918");
$x->__set("numFilhos", 0);
$x->__set("cargo", "Chefe de Cozinha");
$x->__set("salario", "5.500,00");

echo "Teste funcionário X: </br>";
echo $x->__get("nome") . " possui " . $x->__get("numFilhos") . " filho(s)</br>";
echo "Telefone: " . $x->__get("telefone") . ", seu cargo é " . $x->__get("cargo") . " e recebe R$" . $x->__get("salario");

// 
echo "<hr>";

//  M
$m = new Funcionario();

$m->__set("nome", "Fred");
$m->__set("sobrenome", "Mercury");
$m->__set("musica", "Rock");
$m->__set("esporte", "Volei");

echo "Teste funcionário M: </br>";
echo $m->__get("nome") . " " . $m->__get("sobrenome") . " ama " . $m->__get("musica") . " e joga " . $m->__get("esporte");

?>