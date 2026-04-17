<?php
include("config.php"); // ou conexao.php 
// (depende do seu nome)

$sql = "SELECT * FROM usuarios WHERE email - '{$_POST[ 'email']}'";
$res = $conexao > query($sql);

if ($res -> num > 0){
  header ('localhost: cadastro.php?email=erro');
  exit(); 
}
if($_POST['perfil'] === '--Selecione--')
  {
   header('location: cadastro.php?validarperfil=erro');
  }else {

  


$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);
$perfil = $_POST['perfil'];

$sql = "INSERT INTO usuarios (nome, email, senha, perfil)
        VALUES ('$nome', '$email', '$senha', '$perfil')";
$res = $conexao->query($sql);
if($res==true){
  header('location: index.php?usuario=sucesso');
} else 
  {header('location: cadastro.php?usuario=falha');
    

}
  }
?>