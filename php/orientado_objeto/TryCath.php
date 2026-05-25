<?php
// Ativa a exibição de erros na tela para facilitar nosso teste
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 1. Criamos a classe responsável pela autenticação
class Autenticacao {
    // Dados simulados do banco de dados
    private string $usuarioCorreto = "admin";
    private string $senhaCorreta = "123456";

    public function logar(string $usuario, string $senha): void {
        // Validação 1: Campos vazios
        if (empty($usuario) || empty($senha)) {
            throw new Exception("Preencha todos os campos obrigatórios.");
        }

        // Validação 2: Usuário incorreto
        if ($usuario !== $this->usuarioCorreto) {
            throw new Exception("Usuário não encontrado.");
        }

        // Validação 3: Senha incorreta
        if ($senha !== $this->senhaCorreta) {
            throw new Exception("Senha incorreta. Tente novamente.");
        }

        // Se passar por todas as validações sem disparar nenhuma exceção:
        echo " Login realizado com sucesso! Bem-vindo, " . $usuario . ".<br>";
    }
}

// 2. Execução do código usando o TRY-CATCH
$auth = new Autenticacao();

// --- TESTE 1: Login com dados corretos ---
echo "<h3>Teste 1: Dados Corretos</h3>";
try {
    $auth->logar("admin", "123456");
} catch (Exception $e) {
    echo "Erro: " . $e->getMessage() . "<br>";
}

// --- TESTE 2: Login com senha errada ---
echo "<h3>Teste 2: Dados Incorretos</h3>";
try {
    $auth->logar("admin", "senha_errada");
} catch (Exception $e) {
    // O PHP vai pular direto para cá e exibir a mensagem amigável
    echo " Ops! Falha no acesso: " . $e->getMessage() . "<br>";
}

// --- TESTE 3: Login com campos vazios ---
echo "<h3>Teste 3: Campos Vazios</h3>";
try {
    $auth->logar("", "");
} catch (Exception $e) {
    echo " Ops! Falha no acesso: " . $e->getMessage() . "<br>";
} finally {
    // O bloco finally roda independente de ter dado erro ou não
    echo "<small>Processo de login encerrado.</small><br>";
}
