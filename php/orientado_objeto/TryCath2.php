<?php

// 1. Criamos a nossa própria classe de erro customizada para senhas
class SenhaIncorretaException extends Exception {
    // Ela pode ficar vazia! Só de herdar (extends) a Exception, 
    // ela já ganha todos os superpoderes e métodos como o getMessage().
}

class Autenticacao {
    private string $usuarioCorreto = "admin";
    private string $senhaCorreta = "123456";

    public function logar(string $usuario, string $senha): void {
        if ($usuario !== $this->usuarioCorreto) {
            // Lança o erro genérico normal do PHP
            throw new Exception("Usuário não cadastrado no sistema.");
        }

        if ($senha !== $this->senhaCorreta) {
            // Lança o NOSSO erro customizado específico para senhas
            throw new SenhaIncorretaException("A senha digitada está incorreta!");
        }

        echo " Login efetuado com sucesso!<br>";
    }
}

// --- TESTANDO O CÓDIGO ---
$auth = new Autenticacao();

try {
    // Vamos testar errando a senha de propósito
    $auth->logar("admin", "senha_errada");

} catch (SenhaIncorretaException $e) {
    // 2. Se o erro for EXCLUSIVAMENTE de senha, cai aqui!
    echo " Alerta de Segurança: " . $e->getMessage() . "<br>";
    echo "Dica: Você pode bloquear a conta do usuário após 3 erros desse tipo.<br>";

} catch (Exception $e) {
    // 3. Se for qualquer outro erro (como usuário errado), cai aqui!
    echo " Erro Geral: " . $e->getMessage() . "<br>";
}
