<?php
session_start();
require_once 'validador_acesso.php';
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Home - App Help Desk</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <style>
    body {
      background-color: #f4f6f9;
    }

    .card-home {
      padding: 30px;
      max-width: 700px;
      margin: 50px auto;
    }

    .menu-item {
      text-align: center;
      padding: 20px;
      border-radius: 10px;
      transition: 0.3s;
    }

    .menu-item:hover {
      background-color: #f1f1f1;
      transform: translateY(-5px);
    }

    .menu-img {
      transition: 0.3s;
      cursor: pointer;
    }

    .menu-img:hover {
      transform: scale(1.2);
    }

    .menu-text {
      margin-top: 10px;
      font-weight: bold;
      color: #333;
    }

    a {
      text-decoration: none;
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="logo.png" width="30" height="30" class="d-inline-block align-top">
      App Help Desk
    </a>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link text-white" href="logoff.php">SAIR</a>
      </li>
    </ul>
  </nav>

  <!-- CONTEÚDO -->
  <div class="container">
    <div class="card-home">
      <div class="card shadow">
        <div class="card-header text-center">
          <h4>Menu</h4>
        </div>

        <div class="card-body">
          <div class="row">

            <!-- ABRIR -->
            <div class="col-4">
              <div class="menu-item">
                <a href="abrir_chamado.php">
                  <img src="formulario_abrir_chamado.png" width="70" class="menu-img">
                  <div class="menu-text">Abrir</div>
                </a>
              </div>
            </div>

            <!-- EDITAR -->
            <div class="col-4">
              <div class="menu-item">
                <a href="editar_chamado.php">
                  <img src="edit2.png" width="70" class="menu-img">
                  <div class="menu-text">Editar</div>
                </a>
              </div>
            </div>

            <!-- CONSULTAR -->
            <div class="col-4">
              <div class="menu-item">
                <a href="consultar_chamado.php">
                  <img src="formulario_consultar_chamado.png" width="70" class="menu-img">
                  <div class="menu-text">Consultar</div>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</body>
</html>