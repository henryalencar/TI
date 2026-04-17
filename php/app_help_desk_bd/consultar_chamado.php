<?php
require_once "validador_acesso.php";
require "config.php";

// Consulta chamados
if ($_SESSION['perfil'] != 'Adm') {
    $sql = "SELECT * FROM chamados WHERE id_usuario = {$_SESSION['id']}";
} else {
    $sql = "SELECT * FROM chamados";
}

$res = $conexao->query($sql);

// Consulta usuários
$sql = "SELECT * FROM usuarios";
$resusuarios = $conexao->query($sql);
?>

<html>
<head>
  <meta charset="utf-8" />
  <title>App Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <style>
    .card-consultar-chamado {
      padding: 30px 0 0 0;
      width: 100%;
      margin: 0 auto;
    }

    .badge {
      padding: 8px 12px;
      font-size: 13px;
      border-radius: 8px;
    }

    .desc-tecnico {
      background: #eef6ff;
      padding: 10px;
      border-radius: 6px;
      margin-top: 10px;
    }
  </style>
</head>

<body>

<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="home.php">
    App Help Desk
  </a>
</nav>

<div class="container">    
  <div class="row">

    <div class="card-consultar-chamado">
      <div class="card">
        <div class="card-header">
          Consulta de chamado
        </div>
        
        <div class="card-body">

          <?php while($row = $res->fetch_object()){ 

            // STATUS COLORIDO
            switch ($row->status) {
              case 'aberto':
                $cor = 'success';
                break;
              case 'em andamento':
                $cor = 'warning';
                break;
              case 'fechado':
                $cor = 'danger';
                break;
              default:
                $cor = 'secondary';
            }

          ?>

          <div class="card mb-3 bg-light">
            <div class="card-body">

              <h5 class="card-title"><?php echo $row->titulo ?></h5>

              <h6 class="card-subtitle mb-2 text-muted">
                Categoria: <?php echo $row->categoria ?>
              </h6>

              <!-- DESCRIÇÃO USUÁRIO -->
              <p class="card-text">
                <strong>Descrição do Usuário:</strong><br>
                <?php echo $row->descricao ?>
              </p>

              <!-- DESCRIÇÃO TÉCNICO -->
              <?php if (!empty($row->descricao_tecnico)) { ?>
                <div class="desc-tecnico">
                  <strong>Descrição do Técnico:</strong><br>
                  <?php echo $row->descricao_tecnico; ?>
                </div>
              <?php } ?>

              <!-- STATUS -->
              <p class="mt-2">
                Status: 
                <span class="badge badge-<?php echo $cor; ?>">
                  <?php echo ucfirst($row->status); ?>
                </span>
              </p>

              <!-- USUÁRIO -->
              <h6 class="card-subtitle mb-2 text-muted" style="text-align: right;">
                <?php 
                $idusuario = $row->id_usuario;
                $resusuarios->data_seek(0);

                while ($user = $resusuarios->fetch_object()){
                  if ($user->id_usuario == $idusuario){ 
                    echo '<span style="color: green;">Usuário: ' . $user->nome . '</span>';
                    break;
                  }
                }
                ?>
              </h6>

              <!-- ID -->
              <h6 style="text-align: right;">
                Ordem de Serviço: <?php echo $row->id_chamado ?>
              </h6>

            </div>
          </div>

          <?php } ?>
          
          <div class="row mt-5">
            <div class="col-6">
              <a class="btn btn-lg btn-warning btn-block" href="home.php">Voltar</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

</body>
</html>