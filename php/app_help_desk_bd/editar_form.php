<?php
require_once "validador_acesso.php";
require_once "config.php";

if (!isset($_GET['id'])) {
    echo "ID não informado";
    exit;
}

$id = (int) $_GET['id'];

//  Prepared (mais seguro) 
$stmt = $conexao->prepare("SELECT * FROM chamados WHERE id_chamado = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows == 0) {
    echo "Chamado não encontrado";
    exit;
}

$row = $res->fetch_object();
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Editar Chamado</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

</head>

<body>

<div class="container mt-4">
  <h3>Editar Chamado #<?= $row->id_chamado ?></h3>

  <form action="update_chamado.php" method="POST">

    <input type="hidden" name="id_chamado" value="<?= $row->id_chamado ?>">

    <div class="form-group">
      <label>Título</label>
      <input type="text" name="titulo" class="form-control" value="<?= $row->titulo ?>" required>
    </div>

    <div class="form-group">
      <label>Categoria</label>
      <select name="categoria" class="form-control">
        <option value="<?= $row->categoria ?>" selected><?= $row->categoria ?></option>
        <option>Hardware</option>
        <option>Software</option>
        <option>Rede</option>
      </select>
    </div>

    <div class="form-group">
      <label>Status</label>
      <select name="status" class="form-control" required>
        <option value="<?= $row->status ?>" selected><?= $row->status ?></option>
        <option value="aberto">Aberto</option>
        <option value="em andamento">Em andamento</option>
        <option value="fechado">Fechado</option>
      </select>
    </div>

    <div class="form-group">
      <label>Descrição do Usuário</label>
      <textarea class="form-control" disabled><?= $row->descricao ?></textarea>
    </div>

    <div class="form-group">
      <label>Descrição do Técnico</label>
      <textarea name="descricao_tecnico" class="form-control"><?= $row->descricao_tecnico ?></textarea>
    </div>

    <div class="form-group">
      <label>Valor</label>
      <input name="valor" type="text" class="form-control" value="<?= $row->valor ?? '' ?>">
    </div>

    <!-- BOTÕES -->
    <div class="mt-3 d-flex">

      <button class="btn btn-success mr-2">💾 Salvar</button>

      <!-- BOTÃO QUE ABRE MODAL -->
      <button type="button" class="btn btn-danger mr-2" data-toggle="modal" data-target="#modalExcluir">
        🗑️ Excluir
      </button>

      <a href="editar_chamado.php" class="btn btn-secondary">⬅ Voltar</a>

    </div>

  </form>
</div>

<!-- MODAL PROFISSIONAL -->
<div class="modal fade" id="modalExcluir" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title">Confirmar exclusão</h5>
        <button type="button" class="close text-white" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        Tem certeza que deseja excluir este chamado?<br>
        <strong>Essa ação não pode ser desfeita.</strong>
      </div>

      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Cancelar
        </button>

        <a href="delete_chamado.php?id=<?= $row->id_chamado ?>" class="btn btn-danger">
          Sim, excluir
        </a>

      </div>

    </div>
  </div>
</div>

<!-- JS Bootstrap -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</body>
</html>