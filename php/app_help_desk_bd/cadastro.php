<?php 
session_start();
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $nome   = $_POST['nome'] ?? '';
    $email  = $_POST['email'] ?? '';
    $senha  = $_POST['senha'] ?? '';
    $perfil = $_POST['perfil'] ?? '';

    if (empty($nome) || empty($email) || empty($senha) || empty($perfil)) {
        header('Location: cadastro.php?erro=1');
        exit;
    }

    $senhaCriptografada = md5($senha);

    // INSERIR NO BANCO
    $sql = "INSERT INTO usuarios (nome, email, senha, perfil)
            VALUES ('$nome', '$email', '$senhaCriptografada', '$perfil')";

    if ($conexao->query($sql) === TRUE) {
        header('Location: index.php?cadastro=sucesso');
        exit;
    } else {
        echo "Erro: " . $conexao->error;
    }
}
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>Cadastro - Help Desk</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <style>
    .card-login {
      padding: 30px 0 0 0;
      width: 350px;
      margin: 0 auto;
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="index.php">
      App Help Desk
    </a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.php">VOLTAR</a>
      </li>
    </ul>
  </nav>

  <!-- CONTEÚDO -->
  <div class="container">
    <div class="row">

      <div class="card-login">
        <div class="card">
          <div class="card-header text-center">
            Cadastre-se
          </div>

          <div class="card-body">

            <!-- ALERTA DE ERRO -->
            <?php if(isset($_GET['erro'])) { ?>
              <div class="alert alert-danger text-center">
                Preencha todos os campos corretamente!
              </div>
            <?php } ?>

            <!-- FORM CORRIGIDO -->
            <form action="cadastro.php" method="POST">

              <div class="form-group">
                <input name="nome" type="text" class="form-control" placeholder="Nome Completo" required>
              </div>

              <div class="form-group">
                <input name="email" type="email" class="form-control" placeholder="E-mail" required>
              </div>

              <div class="form-group">
                <input name="senha" type="password" class="form-control" placeholder="Senha" required>
              </div>

              <div class="form-group">
                <select name="perfil" class="form-control" required>
                  <option value="">-- Selecione --</option>
                  <option value="usuario">Usuário</option>
                  <option value="tecnico">Técnico</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <button class="btn btn-success btn-block" type="submit">
                Cadastrar
              </button>

              <a href="index.php" class="btn btn-secondary btn-block mt-2">
                Voltar
              </a>

            </form>

          </div>
        </div>
      </div>

    </div>
  </div>

</body>
</html>