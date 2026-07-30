<?php
//localhost:/API/api/bebida/update.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");

include_once '../../config/database.php';
include_once '../../Models/bebida.php';

use Apipizza\Models\Bebida;
use Apipizza\Config\Database;

$database = new Database();
$db = $database->getConnection();
$bebida = new Bebida($db);

if ($_SERVER['REQUEST_METHOD'] == 'PUT') { // Verificar se o método de requisição é PUT
    try {
        $data = json_decode(file_get_contents("php://input"));

        if ( // Verificar se os dados não estão vazios
            !empty($data->id) &&
            !empty($data->nome) &&
            !empty($data->qtd) &&
            !empty($data->valor)
        ) { // Se os dados estiverem completos, atribuir os valores ao objeto Bebida
            $bebida->id = $data->id;
            $bebida->nome = $data->nome;
            $bebida->qtd = $data->qtd;
            $bebida->valor = $data->valor;

            if ($bebida->update()) {
                http_response_code(200);
                echo json_encode(
                    array('Mensagem' => 'Bebida Atualizada com Sucesso')
                );
            } else {
                http_response_code(400);
                echo json_encode(
                    array('Erro' => 'Nao foi possivel atualizar a Bebida')
                );
            }
        } else {
            http_response_code(400);
            echo json_encode(
                array('Erro' => 'Dados Incompletos. Nao foi possivel atualizar a Bebida.')
            );
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(
            array('Erro' => 'Ocorreu um erro: ' . $e->getMessage())
        );
    }
} else {
    http_response_code(405);
    echo json_encode(
        array('Erro' => 'Metodo nao permitido. Use PUT.')
    );
}