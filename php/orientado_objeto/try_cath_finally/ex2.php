<?php
function conectar()  //JEITO CERTO DE SE CONECTAR, USAR TRY CATCH PARA TRATAR ERROS
{
    try {  //try é usado para tentar executar um bloco de código que pode gerar uma exceção (erro). Se uma exceção ocorrer, o controle é transferido para o bloco catch correspondente.

        $dsn = "mysql:host=localhost;dbname=pria";
        $user = "root";
        $pass = "";

        $pdo = new PDO($dsn, $user, $pass); //cria uma nova conexão PDO usando os parâmetros fornecidos

        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //configura o modo de erro para exceção 

        echo "Conexão feita com sucesso!";

    } catch (PDOException $e) {  //catch é usado para capturar e tratar a exceção lançada no bloco try. Ele recebe um parâmetro, que é a exceção capturada, e permite que você lide com o erro de maneira apropriada.

        //echo "Erro: " . $e->getMessage();
        //echo "Falha na conexão";
        // http_response_code(503);
        // echo json_encode("Falha na conexao");

    } finally {
        echo "<br>Finalizado.<br>";
    }
}

conectar();

///////////////////////////////////

function conecta()  //JEITO ERRADO DE SE CONECTAR, NÃO USAR
{
    try {
        $dns = "mysql:host=localhost;dbname=praia";
        $user = "root";
        $pass = "";

        $pdo = new PDO($dns, $user, $pass); //cria uma nova conexão PDO usando os parâmetros fornecidos
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //configura o modo de erro para exceção

        echo "Conexão feita com sucesso!";
    } catch (PDOException $e) {
        echo "Erro: " . $e->getMessage();
    } finally {
        echo "<br>Finalizado.<br>";
    }
}
 
conecta();
