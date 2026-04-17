<?php
require_once "validador_acesso.php";
require_once "config.php";

if(!isset($_SESSION['id'])){
    die("ERRO: sessão não carregou id");
}

$id_usuario = $_SESSION['id'];
$titulo = $_POST['titulo'];
$categoria = $_POST['categoria'];
$descricao = $_POST['descricao'];

$sql = "INSERT INTO chamados (id_usuario, titulo, categoria, descricao)
        VALUES ('$id_usuario', '$titulo', '$categoria', '$descricao')";

if($conexao->query($sql) === TRUE){
    $_SESSION['sucesso'] = true;
} else {
    die("Erro SQL: " . $conexao->error);
}

header('Location: abrir_chamado.php');
exit();