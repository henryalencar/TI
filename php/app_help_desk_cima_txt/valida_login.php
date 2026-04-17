<?php
session_start();
require_once "config.php";

// DADOS (MELHOR USAR POST)
$emailUsuario = $_POST['email'];
$senhaUsuario = $_POST['senha'];

// BUSCAR NO BANCO
$sql = "SELECT * FROM usuarios WHERE email = '$emailUsuario' AND senha = '$senhaUsuario'";
$resultado = $conexao->query($sql);

if ($resultado->num_rows > 0) {

    $row = $resultado->fetch_object();

    $_SESSION['autenticado'] = 'sim';
    $_SESSION['id_usuario'] = $row->id_usuario; //  CORRIGIDO
    $_SESSION['nome'] = $row->nome;
    $_SESSION['perfil'] = $row->perfil;

    header('location: home.php');

} else {

    $_SESSION['autenticado'] = 'nao';
    header('location: index.php?login=erro');

}