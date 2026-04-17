<?php
require_once "validador_acesso.php";
require_once "config.php";

if (!isset($_GET['id'])) {
    echo "ID não informado";
    exit;
}

$id = (int) $_GET['id'];

//  segurança do banco
$stmt = $conexao->prepare("DELETE FROM chamados WHERE id_chamado = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    header("Location: editar_chamado.php?msg=excluido");
    exit;
} else {
    echo "Erro ao excluir: " . $conexao->error;
}