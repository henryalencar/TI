<?php

class Pessoa{ //PAi
    private $nome = 'Henry'; //disponível para o propria classe, nem os próprios filhos podem acessar, nem a aplicação;
    protected $sobrenome = 'Alencar'; //disponível para o proprio obj(class) ou filhos, mas não para aplicação;
    public $humor = 'INSPIRADO' ; //Disponível para aplicação quanto para outros objetos;



	
	public function __get($atr)
    {
        return $this->$atr;
    }
    public function __set($atr, $value)
    {
        $this->$atr = $value;
    }

    private function executarMania()
    {
        echo 'Assobiar';
    }

    protected function responder()
    {
        echo 'Oi';
    }

    public function executarAcao()
    {
        $x = rand(1, 10);

        if ($x >= 1 && $x <= 8) {
            $this->executarMania();
        } else {
            $this->responder();
        }
    }
	
}
	
//FILHO
class Filho extends Pessoa  
  //Filho so pode acessar o protegddo, herdar os atributos do pai e passar pro Filho 
{

    public function __construct()
    {
        echo '<pre>';
        print_r(get_class_methods($this));
        echo '</pre>';
    }

    private function executarMania()
    {
        echo 'VIDEOGAME';
    }

    public function x()
    {
        $this->executarMania();
    }

    protected function responder()
    {
        echo 'Olá';
    }
      //NAO TENDO NEHYUM TIPO DE GET OU SET
     
	  /*
      public function getAtributo ($attr) {
            return $this->$attr;
        }

        public function setAtributo ($attr, $value) {
            $this->$attr = $value;
        } 
	  */
		

		
       
       public function __get($atr) {
            return $this->$atr;
        }
        public function __set($atr, $value) {
           $this->$atr = $value;
        } 

		
		 
		
}

$filho = new Filho();  //FILHO

echo '<pre>';
//exibir os atributos do objeto
print_r($filho);
echo '</pre>';

echo '</pre>';
// VAIexibir os métodos do objeto
print_r(get_class_methods($filho));
echo '</pre>';

/*
echo $filho->getAtributo('nome');
    echo '<br />';
    $filho->setAtributo('nome', 'Alencar');
    echo '<pre>';
    print_r($filho);
    echo '</pre>';
    echo '<br />';
    echo $filho->getAtributo('nome'); 
*/

 echo $filho->__get('nome');

    $filho->__set('nome', 'robson');
    echo '<br />';
    echo $filho->__get('nome');

    echo '<pre>';
    print_r($filho);
    echo '</pre>'; 

echo '<br/>'; 
$filho->executarMania();  //PRIVATE vai dar ERRO

echo '<br/>';
echo '<br/>';
$filho->x();

/*


 a classe Pai `Pessoa` com 3 atributos `private`, `protected` e `public`,
 depois a classe `Filho` HERDA com `extends`, usa `__construct` para mostrar métodos, 
 cria métodos proprios (`executarMania`, `x`, `responder`), usa `getAtributo`, `setAtributo`, `__get` e `__set`(MAGICCOS) para acessa ou alterar valores, 
 instancia `$filho = exibe atributos e meetodos, 
 muda o nome de Henry para O sobreNome Alencar e depois robson, mostra herança, encapsulamento,
 sobrescrita e que mtodo `private` so pode ser chamado dentro da própria classe.


*/

?>