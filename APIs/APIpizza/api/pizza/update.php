<?php
//localhost:/API/api/pizza/update.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Max-Age: 3600");

include_once '../../config/database.php';
include_once '../../Models/pizza.php';

use Apipizza\Models\Pizza;
use Apipizza\Config\Database;

$database = new Database();
$db = $database->getConnection();
$pizza = new Pizza($db);

if ($_SERVER['REQUEST_METHOD'] == 'PUT') { // Verificar se o método de requisição é PUT
    try {
        $data = json_decode(file_get_contents("php://input"));

        if ( // Verificar se os dados não estão vazios
            !empty($data->id) &&
            !empty($data->nome) &&
            !empty($data->ingredientes) &&
            !empty($data->valor)
        ) { // Se os dados estiverem completos, atribuir os valores ao objeto Pizza
            $pizza->id = $data->id;
            $pizza->nome = $data->nome;
            $pizza->ingredientes = $data->ingredientes;
            // $pizza->valor = $data->valor;
            $pizza->setValor($data->valor);
 // Usar o setter para atribuir o valor

            if ($pizza->update()) {
                http_response_code(200);
                echo json_encode(
                    array('Mensagem' => 'Pizza Atualizada com Sucesso')
                );
            } else {
                http_response_code(400);
                echo json_encode(
                    array('Erro' => 'Nao foi possivel atualizar a Pizza')
                );
            }
        } else {
            http_response_code(400);
            echo json_encode(
                array('Erro' => 'Dados Incompletos. Nao foi possivel atualizar a Pizza.')
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