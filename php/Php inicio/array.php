<?php
//$frutas = [ 'banana', 'manga', 'melancia']; OUTRAS MANEIRA...
// $frutas =[]

$frutas = [ 'b'=> 'banana', 'm'=> 'manga',  'l' => 'laranja'];

echo '<pre>';
var_dump($frutas); //exebir
echo '<pre>';


echo '<pre>';
print_r($frutas); //exebir
echo '<pre>';

echo $frutas['b'];

$_cadastroAlunos['nomes'] = ['marcos', 'henry', 'juan', 'guilherme', 'gabiriel'];
$_cadastroAlunos['idade'] = ['33', '22', '12', '17', '12'];

echo '<pre>';
var_dump($_cadastroAlunos); //exebir
echo '<pre>';

?>