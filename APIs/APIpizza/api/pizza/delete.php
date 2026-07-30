
<?php
//localhost:/API/api/pizza/delete.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");

include_once '../../config/database.php';
include_once '../../Models/pizza.php';

use apipizza\Models\Pizza;
use Apipizza\Config\Database;

$database = new Database();
$db = $database->getConnection();

$pizza = new Pizza($db);

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') { // Verificar se o método de requisição é DELETE
    try {
        $data = json_decode(file_get_contents("php://input")); // Vai Ler os dados da requisição e decodificar o JSON para um objeto PHP

            if ( // Verificar se os dados não estão vazios
            !empty($data->id) 
        
        ) { // Se os dados estiverem completos, atribuir os valores ao objeto Pizza
            $pizza->id = $data->id;
            $pizza->get();
   
            if ($pizza->delete() && $pizza->nome) {
                http_response_code(200);
                echo json_encode(
                    array('Mensagem' => 'Pizza Deletada com Sucesso')
                );
            } else {
                http_response_code(400);
                echo json_encode(
                    array('Erro' => 'Nao foi possivel deletar a Pizza')
                );
            }
        } else {
            http_response_code(400);
            echo json_encode(
                array('Erro' => 'Dados Incompletos. Nao foi possivel deletar a Pizza.')
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
        array('Erro' => 'Metodo nao permitido. Use DELETE.')
    );
}