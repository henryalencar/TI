<?php
require_once "validador_acesso.php";
require_once "config.php";

$sql = "SELECT * FROM chamados";
$res = $conexao->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Chamados</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>

<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="home.php">Voltar</a>
</nav>

<div class="container mt-4">
  <h3>Lista de Chamados</h3>

  <?php if(isset($_GET['msg'])) { ?>
    <?php if($_GET['msg'] == 'excluido') { ?>
      <div class="alert alert-danger">Chamado excluído com sucesso!</div>
    <?php } elseif($_GET['msg'] == 'atualizado') { ?>
      <div class="alert alert-success">Chamado atualizado com sucesso!</div>
    <?php } ?>
  <?php } ?>

  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Status</th>
        <th>Ação</th>
      </tr>
    </thead>

    <tbody>
      <?php while($c = $res->fetch_object()) { ?>
        <tr>
          <td><?= $c->id_chamado ?></td>
          <td><?= $c->titulo ?></td>
          <td><?= $c->status ?></td>
          <td>

            <!-- EDITAR -->
            <a href="editar_form.php?id=<?= $c->id_chamado ?>" class="btn btn-warning btn-sm">
              Editar
            </a>

            <!-- EXCLUIR -->
            <a href="delete_chamado.php?id=<?= $c->id_chamado ?>" 
               class="btn btn-danger btn-sm"
               onclick="return confirm('Tem certeza que deseja excluir este chamado?');">
               Excluir
            </a>

          </td>
        </tr>
      <?php } ?>
    </tbody>
  </table>
</div>

</body>
</html>