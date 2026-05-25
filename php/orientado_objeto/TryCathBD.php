
<?php
// BANCO DE DADOS EM TRY CATH...
// Configurações fictícias para forçar um erro de conexão
$host = "localhost";
$db   = "meu_banco_que_nao_existe";
$user = "usuario_errado";
$pass = "senha_errada";

// 1. Criamos a função que gera o arquivo de texto (Log)
function salvarErroNoLog(string $mensagem): void {
    $arquivoLog = 'erros_sistema.txt'; //CRIA UM TXT  DOS ERROS ACUMULADOS
    $dataHora = date('Y-m-d H:i:s');
    
    // Formata a linha que será salva no arquivo
    $textoLog = "[{$dataHora}] ERRO CRÍTICO: {$mensagem}" . PHP_EOL;
    
    // FILE_APPEND: Garante que o PHP adicione o texto no fim do arquivo sem apagar o que já existe
    file_put_contents($arquivoLog, $textoLog, FILE_APPEND);
}

// 2. Execução com PDO, Multi-catch e Log
try {
    echo "Tentando conectar ao banco de dados...<br>";
    
    // O PDO lança uma 'PDOException' se a conexão falhar
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    
    // Configura o PDO para sempre lançar exceções quando encontrar erros de SQL
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Conexão realizada com sucesso!<br>";

} catch (PDOException | InvalidArgumentException $e) {
    // 3. CAPTURA MÚLTIPLA usando a barra vertical (|)
    // Se acontecer um erro de Banco (PDOException) OU um erro de argumento inválido, cai aqui!
    
    echo " Um erro ocorreu! Detalhes salvos no log do sistema.<br>";
    
    // Enviamos a mensagem do erro para a nossa função de log
    salvarErroNoLog($e->getMessage());

} catch (Exception $e) {
    // Captura qualquer outro erro genérico que não seja os dois acima
    echo "Erro geral: " . $e->getMessage() . "<br>";
    salvarErroNoLog($e->getMessage());
}
