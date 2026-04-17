<?php


require_once "validador_acesso.php";
?>

<?php
// MENSAGEM DE SUCESSO
if(isset($_SESSION['sucesso'])){
?>
    <div class="alert alert-success text-center">
        Chamado aberto com sucesso!
    </div>
<?php
    unset($_SESSION['sucesso']);
}
?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Abrir Chamado</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <style>
    .card-abrir-chamado {
      padding: 30px 0 0 0;
      width: 100%;
      margin: 0 auto;
    }
  </style>
</head>

<body>

<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    App Help Desk
  </a>
</nav>

<div class="container">
  <div class="row">
    <div class="card-abrir-chamado">
      <div class="card">
        <div class="card-header">
          Abertura de chamado
        </div>

        <div class="card-body">
          <form method="POST" action="registra_chamado.php">

            <div class="form-group">
              <label>Título</label>
              <input type="text" name="titulo" class="form-control" required>
            </div>

            <div class="form-group">
              <label>Categoria</label>
              <select name="categoria" class="form-control">
                <option>Criação Usuário</option>
                <option>Impressora</option>
                <option>Hardware</option>
                <option>Software</option>
                <option>Rede</option>
              </select>
            </div>

            <div class="form-group">
              <label>Descrição</label>
              <textarea name="descricao" class="form-control" rows="3" required></textarea>
            </div>

            <div class="row mt-4">
              <div class="col-6">
                <a href="home.php" class="btn btn-warning btn-block">Voltar</a>
              </div>

              <div class="col-6">
                <button class="btn btn-info btn-block" type="submit">
                  Abrir
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
</div>

</body>
</html>