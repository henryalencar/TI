<?php

// EXEMPLO DE VULNERABILIDADES DE SEGURANÇA EM PHP 
// 1 SQL INJECTION (JEITO ERRADO) SEM PROTECAO


$email = $_POST['email'];
$senha = $_POST['senha'];

// O PERIGOSO 
// O usuário pode enviar comandos SQL maliciosos (TENTANDO INJETAR CODIGOS)
$sql = "SELECT * FROM usuarios 
        WHERE email = '$email' 
        AND senha = '$senha'";



// 2 SQL INJECTION (JEITO CERTO)


// SEGURO 
// 'Prepared Statement' protege o banco 
$stmt = $conn->prepare(
    "SELECT * FROM usuarios 
     WHERE email = ? 
     AND senha = ?"
);

$stmt->bind_param("ss", $email, $senha);   //'bind_param' coloca os dados do usuário no SQL com segurancca.
$stmt->execute();  // 'stmt' VAI GUARDAR OS VALORES DE email E senha COMO STRING...)



// 3 SANITIZACAO DE ENTRADAS

// Limpa e valida os dados digitados

$email = filter_input(
    INPUT_POST,
    'email',
    FILTER_VALIDATE_EMAIL
);

$idade = filter_input(
    INPUT_POST,
    'idade',
    FILTER_VALIDATE_INT
);

// Verificacao simples
if (!$email) {
    echo "E-mail inválido";
}

if (!$idade) {
    echo "Idade inválida";
}



// 4 EXPOSIÇCAO DE CREDENCIAIS


// ERRADO 
// Senha exposta no código
$senhaBanco = "123456";


// CERTOO
// Usar variável de ambiente (.env)
$senhaBanco = getenv('DB_PASS'); // 'getenv' Vai guardar a senha do banco de dados em uma varivel protegend de exposição no codigo fonte

echo "Sistema protegido!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";

?>