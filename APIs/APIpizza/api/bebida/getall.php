<?php
// BEBIDA

// http://localhost/API/api/bebida/getall.php


// Headers obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Incluir arquivos de banco de dados e modelo
include_once '../../Config/Database.php';
include_once '../../Models/Bebida.php';

use Apipizza\Models\Bebida; //imprortnsdo o modelo bebida
use Apipizza\Config\Database; // Importando a classe Database do namespace Apipizza\Config


// Instanciar o objeto Database e obter a conexão
$database = new Database();
$db = $database->getConnection();

// Instanciar o objeto Bebida
$bebida = new Bebida($db);

try {

    // Chamar o método getall() para buscar as bebidas
    $stmt = $bebida->getall();
    $num = $stmt->rowCount();

    // Verificar se mais de 0 registros foram encontrados
    if ($num > 0) {

        // Array de bebidas
        $bebidas_arr = array();

        // Percorrer o resultado da consulta
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            extract($row);

            $bebida_item = array(
                "id" => $idBebida,
                "nome" => $nome,
                "ingredientes" => $ingredientes,
                "qtd" => $qtd,
                "valor" => $valor
            );

            array_push($bebidas_arr, $bebida_item);
        }

        // Código 200 OK
        http_response_code(200);

        // Retornar JSON
        echo json_encode($bebidas_arr);

    } else {

        // Código 404 Not Found
        http_response_code(404);

        echo json_encode(
            array("Mensagem" => "Nenhuma bebida encontrada.")
        );
    }

} catch (Exception $e) {

    echo json_encode(
        array("erro de banco de dados" => $e->getMessage())
    );

} catch (Throwable $e) {

    echo json_encode(
        array("erro" => $e->getMessage())
    );
}