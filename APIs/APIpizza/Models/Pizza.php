<?php

namespace Apipizza\Models; //definindo o namespace para organizar o código e evitar conflitos de nomes
use PDO; // Importando a classe PDO para manipulação de banco de dados
use Exception; // Importando a classe Exception para tratamento de erros


class Pizza{
    public $id;

    private string $nome;

    public $ingredientes;

    private float $valor;

    private $db;

    private $tabela = "pizzas";
    
    //METODO CONSTRUTOR PARA RECEBER A CONEXAO COM O BANCO DE DADOS

    public function __construct($db){
        $this->db = $db;
    }

    //getter e setteer
    public function getValor(){ 
        return $this->valor;
    }
    public function setValor(float $valor){
        $this->valor = $valor;
        if ($valor < 0) {
            throw new Exception("O valor da pizza é INVALIDO não pode ser negativo.");
        }
    }

        public function __get(string $nome){   //VAI NO BANCO DE DADOS E TRAZ TODAS AS PIZZAS CADASTRADAS
           return $this->$nome;
        }
        public function __set(string $nome, string $valor){
            if (trim(strlen($valor) < 3)) {
                throw new Exception("O valor do campo $nome é INVALIDO, deve conter pelo menos 3 caracteres.");
            }
            $this->$nome = $valor;
        }

    public function getall(){   //VAI NO BANCO DE DADOS E TRAZ TODAS AS PIZZAS CADASTRADAS
        $query = "SELECT * FROM " . $this->tabela;

        $stmt = $this->db->prepare($query); //preparando a query para ser executada, evitando SQL Injection

        $stmt->execute();  //stmt é o objeto que contém o resultado da consulta, e execute() executa a consulta preparada

        return $stmt;
    }

    public function get(){  // VAI NO BANCO DE DADOS E TRAZ APENAS A PIZZA COM O ID ESPECIFICADO
    // Cria a consulta
        $query = 'SELECT
                p.idPizza,
                p.nome,
                p.ingredientes,
                p.valor
            FROM
                ' . $this->tabela . ' p
            WHERE
                p.idPizza = ?    
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
        $this->ingredientes = $row['ingredientes'];
        $this->valor = $row['valor'];
 
    }

    public function add(){  //ADICIONA UMA NOVA PIZZA NO BANCO DE DADOS VIA POST, RECEBENDO OS DADOS DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "INSERT INTO " . $this->tabela . " (nome, ingredientes, valor) VALUES (:nome, :ingredientes, :valor)";

        $stmt = $this->db->prepare($query);

        // Limpa os dados para evitar SQL Injection e XSS (Cross-Site Scripting)
        $this->nome=htmlspecialchars(strip_tags($this->nome)); 
        $this->ingredientes=htmlspecialchars(strip_tags($this->ingredientes));
        $this->valor=htmlspecialchars(strip_tags($this->valor));

        // Bind dos valores
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":ingredientes", $this->ingredientes);
        $stmt->bindParam(":valor", $this->valor);

        if($stmt->execute()){
            return true;
        }
 
        return false;

    }

    public function update(){  //ATUALIZA OS DADOS DE UMA PIZZA EXISTENTE NO BANCO DE DADOS VIA PUT, RECEBENDO OS DADOS DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "UPDATE " . $this->tabela . " SET nome = :nome, ingredientes = :ingredientes, valor = :valor WHERE idPizza = :id";
 
        $stmt = $this->db->prepare($query);
 
        // Limpa os dados para evitar SQL Injection e XSS
        $this->nome=htmlspecialchars(strip_tags($this->nome));
        $this->ingredientes=htmlspecialchars(strip_tags($this->ingredientes));
        $this->valor=htmlspecialchars(strip_tags($this->valor));
        $this->id=htmlspecialchars(strip_tags($this->id));
 
        // Bind dos valores/ bindParam é um método do PDO que vincula um valor a um parâmetro nomeado ou de posição na consulta SQL. Ele é usado para evitar SQL Injection, garantindo que os valores sejam tratados como dados e não como parte da consulta SQL...
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":ingredientes", $this->ingredientes);
        $stmt->bindParam(":valor", $this->valor);
        $stmt->bindParam(":id", $this->id);
 
        if($stmt->execute()){
            return true;
        }
 
        return false;
    }
    
    public function delete(){  //EXCLUI UMA PIZZA EXISTENTE NO BANCO DE DADOS VIA DELETE, RECEBENDO O ID DA PIZZA VIA PROPRIEDADES DO OBJETO
        $query = "DELETE FROM " . $this->tabela . " WHERE idPizza = ?";

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