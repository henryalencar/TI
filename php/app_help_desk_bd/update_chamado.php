<?php
require_once "config.php";

$id = (int) $_POST['id_chamado'];
$titulo = $_POST['titulo'];
$categoria = $_POST['categoria'];
$status = $_POST['status'];
$descTec = $_POST['descricao_tecnico'];
$valor = $_POST['valor'] ?? 0;

$sql = "UPDATE chamados SET 
    titulo = '$titulo',
    categoria = '$categoria',
    status = '$status',
    descricao_tecnico = '$descTec',
    valor = '$valor'
    WHERE id_chamado = $id";

$conexao->query($sql);

header("Location: editar_chamado.php?msg=ok");
exit;