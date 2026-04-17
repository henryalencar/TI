
<?php
$nome ='henry alencar';
$idade = '18 anos';
$profissao = 'TI';
//comentar

/* opcão 1 CONCATENAR*/
$fichaCompleta = '<strong> nome:</strong>' .$nome . ' - <strong>idade:</strong>' . $idade . ' - <strong> profissao: </strong>' . $profissao . '.';
echo $fichaCompleta . '<hr>';

/* opcão 2 CONCATENAR*/
$fichaCompleta = " <strong> nome: </strong> $nome - ";
$fichaCompleta .= " <strong> idade: </strong> $idade - ";
$fichaCompleta .= " <strong> profissao: </strong> $profissao.";
echo 'opção 2:' . $fichaCompleta .'<hr>' ;

/* opcão 3 CONCATENAR*/
$fichaCompleta = "meu nome é {$nome}, tenho {$idade} anos e sou {$profissao};";
echo 'opção 3: '. $fichaCompleta . '<hr>';

/* opcão 4 CONCATENAR*/
echo "opção 4: Meu nome  {$nome}, tenho {$idade} anos e sou {$profissao}. ";
?>