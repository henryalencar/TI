<?php

// MODELO
class Personagem {

    // atributos
    public $nome = null;
    public $vida = null;
    public $nivel = null;

    // métodos
    function resumirPersonagem() {
        return "$this->nome tem nível $this->nivel e $this->vida de vida";
        
    }

    function modificarVida($vida){
        $this->vida = $vida;   
    }

    function modificarNivel($nivel){
        $this->nivel = $nivel;
    }

    function modificarNome($nome){
        $this->nome = $nome;
    }
}

//SAO 4 PERSONAGENS 

// objeto 1
$p1 = new Personagem;
echo $p1->resumirPersonagem();
echo "<br/>";
$p1->modificarNome("Guerreiro");
$p1->modificarVida(100);
$p1->modificarNivel(5);
echo $p1->resumirPersonagem();

echo "<hr>";

// objeto 2
$p2 = new Personagem;
$p2->modificarNome("Mago Davy Jones");
$p2->modificarVida(80);
$p2->modificarNivel(7);
echo $p2->resumirPersonagem(); //imprime

echo "<hr>";

// objeto 3
$p3 = new Personagem;
$p3->modificarNome("arqueiroa");
$p3->modificarVida(90);
$p3->modificarNivel(6);
echo $p3->resumirPersonagem();

echo "<hr>";

// objeto 4
$p4 = new Personagem;
$p4->modificarNome("Jedi");
$p4->modificarVida(200);
$p4->modificarNivel(10);
echo $p4->resumirPersonagem();

echo "<hr>";


?>