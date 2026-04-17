<?php

session_start();


if(isset($_GET['cadastro']) && $_GET['cadastro'] == 'sucesso'){
    echo '
    <div class="alert alert-success text-center">
        <strong>Sucesso!</strong> Usuário cadastrado com sucesso.
    </div>
    ';
}
?>


<!DOCTYPE html>
<html>
<head>
  
  <title>Login</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
  <div class="col-md-4 offset-md-4">
    <div class="card">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form method="POST" action="valida_login.php">
          <input type="email" name="email" class="form-control mb-2" placeholder="E-mail" required>
          <input type="password" name="senha" class="form-control mb-2" placeholder="Senha" required>

          <?php 
          if(isset($_GET['login'])){
              if($_GET['login']=='erro'){
                  echo '<div class="text-danger">E-mail ou senha incorretos</div>';
              } elseif($_GET['login']=='erro2'){
                  echo '<div class="text-danger">Faça login para acessar a página</div>';
              }
          }
          ?>

          <button class="btn btn-info btn-block">Entrar</button>
          <a href="cadastro.php" class="btn btn-success btn-block mt-2">Cadastrar</a>
        </form>
      </div>
    </div>
  </div>
</div>
</body>
</html>