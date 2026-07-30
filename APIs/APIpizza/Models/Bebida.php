<?php

namespace Apipizza\Models; //definindo o namespace para organizar o código e evitar conflitos de nomes
use PDO; // Importando a classe PDO para manipulação de banco de dados
use Exception; // Importando a classe Exception para tratamento de erros

class Bebida {

    public $id;

    public $nome;

    public $tipo;

    public $valor;

    public $qtd;

    private $db;

    private $tabela = "bebidas";

    // Lista todas as bebidas
    public function getAll(){   // ROTA GETALL PARA TRAZER TODAS AS BEBIDAS EM OREM ALFABÉTICA
        $query = "SELECT * FROM " . $this->tabela . " ORDER BY nome ASC";  // para selecionar todas as bebidas ordenadas por nome usei o 'ORDER BY nome ASC'

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // Lista apenas bebidas alcoólicas
    public function getAlcoolicas(){
        $query = "SELECT * FROM " . $this->tabela . " WHERE categoria = 'alcoolica'";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    // Lista apenas bebidas não alcoólicas
    public function getNaoAlcoolicas(){
        $query = "SELECT * FROM " . $this->tabela . " WHERE categoria = 'nao_alcoolica'";

        $stmt = $this->db->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //METODO CONSTRUTOR PARA RECEBER A CONEXAO COM O BANCO DE DADOS

    public function __construct($db){
        $this->db = $db;
    }


    public function get(){  // VAI NO BANCO DE DADOS E TRAZ APENAS A BEBIDA COM O ID ESPECIFICADO
    // Cria a consulta
        $query = 'SELECT
        p.idBebida,
        p.nome,
        p.qtd,
        p.valor,
        p.categoria
        FROM
        ' . $this->tabela . ' p
        WHERE
        p.idBebida = ?
        LIMIT 1';
 
        // Prepara a query
        $stmt = $this->db->prepare($query);
 
        // Vincula o ID
        $stmt->bindParam(1, $this->id);
       
        // Executa a query
        $stmt->execute();
 
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        // Define as propriedades
        $this->nome = $row['nome'];
        $this->qtd = $row['qtd'];
        $this->valor = $row['valor'];
        $this->tipo = $row['categoria'];
        
        

    }

    public function add(){  //ADICIONA UMA NOVA Bebida NO BANCO DE DADOS VIA POST, RECEBENDO OS DADOS DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "INSERT INTO " . $this->tabela . " (nome, qtd, valor) VALUES (:nome, :qtd, :valor)";

        $stmt = $this->db->prepare($query);

        // Limpa os dados para evitar SQL Injection e XSS (Cross-Site Scripting)
        $this->nome=htmlspecialchars(strip_tags($this->nome));
        $this->qtd=htmlspecialchars(strip_tags($this->qtd));
        $this->valor=htmlspecialchars(strip_tags($this->valor));

        // Bind dos valores
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":qtd", $this->qtd);
        $stmt->bindParam(":valor", $this->valor);

        if($stmt->execute()){
            return true;
        }
 
        return false;

    }

    public function update(){  //ATUALIZA OS DADOS DE UMA BEBIDAS EXISTENTE NO BANCO DE DADOS VIA PUT, RECEBENDO OS DADOS DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "UPDATE " . $this->tabela . " SET nome = :nome, qtd = :qtd, valor = :valor WHERE idBebida = :id";
 
        $stmt = $this->db->prepare($query);
 
        // Limpa os dados para evitar SQL Injection e XSS
        $this->nome=htmlspecialchars(strip_tags($this->nome));
        $this->qtd=htmlspecialchars(strip_tags($this->qtd));
        $this->valor=htmlspecialchars(strip_tags($this->valor));
        $this->id=htmlspecialchars(strip_tags($this->id));
 
        // Bind dos valores/ bindParam é um método do PDO que vincula um valor a um parâmetro nomeado ou de posição na consulta SQL. Ele é usado para evitar SQL Injection, garantindo que os valores sejam tratados como dados e não como parte da consulta SQL...
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":qtd", $this->qtd);
        $stmt->bindParam(":valor", $this->valor);
        $stmt->bindParam(":id", $this->id);
 
        if($stmt->execute()){
            return true;
        }
 
        return false;
    }
     public function delete(){  //EXCLUI UMA PIZZA EXISTENTE NO BANCO DE DADOS VIA DELETE, RECEBENDO O ID DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "DELETE FROM " . $this->tabela . " WHERE idBebida = ?";

        $stmt = $this->db->prepare($query);

        // Limpa o ID para evitar SQL Injection e XSS
        $this->id=htmlspecialchars(strip_tags($this->id));

        // Bind do ID
        $stmt->bindParam(1, $this->id);

        if($stmt->execute()){
            return true;
        }

        return false;
    }
}


