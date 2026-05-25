<?php
// DESAFIO 
// Times (pai) SELCOES, CLUBES, CLUNES AMADORES .  EXPROTATAR ATRIBUTOS PARA ASC CLASSES FILHAS(HERANÇA), USAR O _CONSTRUCT  E APNEAS NAS SELOÇOES PARAA PRREENCHER OS ATRIBUTOS . USAR O _SET E _GET ÇARA O RESTANTE. TER UNS 1O ATRUBUTOS E 5 METODOS AO TODO ONDE : PELO MENOS 2 DE CADA SEJA EXLCUSIVO DO FILHO . PNEAR EM UM ATRUHBUTO OU METODO PARA USAR O POLIFORFISMO.
// 


abstract class Time {

    public $nome = null;
    public $pais = null;
    public $tecnico = null;
    public $titulos = null;
    public $estadio = null;
    public $jogadores = null;
    public $cor = null;
    public $valor = null;
    public $fundacao = null;
    public $categoria = null;

    function __set($atributo, $valor){
        $this->$atributo = $valor;
    }

    function __get($atributo){
        return $this->$atributo;
    }

    function resumir(){
        return "$this->nome - $this->pais - $this->titulos títulos";
    }

    function jogar(){
        return "$this->nome está jogando";
    }

    function treinar(){
        return "$this->nome está treinando";
    }

    abstract function tipoCompeticao();
}


//  SELEÇÃO 
class Selecao extends Time {

    function __construct($nome, $pais, $tecnico){
        $this->nome = $nome;
        $this->pais = $pais;
        $this->tecnico = $tecnico;
    }

    function convocar(){
        return "Convocando jogadores da seleção";
    }

    function hino(){
        return "Tocando hino nacional";
    }

    function tipoCompeticao(){
        return "Copa do Mundo";
    }
}


//  CLUBE 
class Clube extends Time {   //extends (HERANÇA)

    function contratar(){
        return "Contratou jogador";
    }

    function vender(){
        return "Vendeu jogador";
    }

    function tipoCompeticao(){
        return "Campeonato de clubes";
    }
}


//AMADOR
class Amador extends Time {

    function amistoso(){
        return "Organizou amistoso";
    }

    function peneira(){
        return "Fez peneira de jogadores";
    }

    function tipoCompeticao(){
        return "Campeonato local";
    } 
}


// 

// SELEÇÃO (usa constructor)
$s = new Selecao("Brasil", "Brasil", "Técnico");
$s->__set("titulos", 5);

echo $s->resumir() . "<br>";
echo $s->convocar() . "<br>";
echo $s->hino() . "<br>";
echo $s->tipoCompeticao();

echo "<hr>";

// CLUBE vouusa set)
$c = new Clube();
$c->__set("nome", "Santos");
$c->__set("pais", "Brasil");
$c->__set("titulos", 8);

echo $c->resumir() . "<br>";
echo $c->contratar() . "<br>";
echo $c->vender() . "<br>";
echo $c->tipoCompeticao();

echo "<hr>";

// AMADOR
$a = new Amador();
$a->__set("nome", "FEIAJO COM FARINHA FC ");
$a->__set("pais", "Brasil");
$a->__set("titulos", 1);

echo $a->resumir() . "<br>";
echo $a->amistoso() . "<br>";
echo $a->peneira() . "<br>";
echo $a->tipoCompeticao();

?>


 
 