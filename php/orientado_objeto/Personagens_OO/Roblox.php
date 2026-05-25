<?php
// INTERFACE
interface JogoInterface {
    public function mostrarInfo();
}

// ABSTRAÇÃO
abstract class Jogo implements JogoInterface {

    // ENCAPSULAMENTO
    protected $nome;
    protected $descricao;
    protected $dicas;
    protected $imagem;

    // ESTATICO
    public static $totalJogos = 0;

    // CONSTRUCT
    public function __construct($nome, $descricao, $dicas, $imagem) {
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->dicas = $dicas;
        $this->imagem = $imagem;
        self::$totalJogos++;
    }

    // MÉTODO ESTÁTICO
    public static function mostrarTotal() {
        echo "<p class='total'>Total de jogos carregados: " . self::$totalJogos . "</p>";
    }

    // DESTRUCT
    public function __destruct() {
        // \executa no final
    }

    // MEODO NORMAL
    public function exibirCard() {
        echo "
        <div class='card'>
            <h2>$this->nome</h2>
            <p><strong>Descrição:</strong> $this->descricao</p>
            <p><strong>Dicas:</strong> $this->dicas</p>
            <img src='$this->imagem'>
        </div>";
    }

    // MÉTODO ABSTRATO
    abstract public function mostrarInfo();
}

// HERANÇA DOS FILHIS
class Brookhaven extends Jogo {
    public function mostrarInfo() {
        $this->exibirCard();
    }
}

class BloxFruits extends Jogo {
    public function mostrarInfo() {
        $this->exibirCard();
    }
}

class Noites99 extends Jogo {
    public function mostrarInfo() {
        $this->exibirCard();
    }
}

class Murder extends Jogo {
    public function mostrarInfo() {
        $this->exibirCard();
    }
}

class Prisao extends Jogo {
    public function mostrarInfo() {
        $this->exibirCard();
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Roblox os Melhores Jogos</title>

<style>

body{
    font-family:Arial;
    color:white;
    text-align:center;
    margin:0;
    padding:0;
    background-image:url('img/robloxCapa2.jpg');
    background-size:cover;
    background-attachment:fixed;
}

body::before{
    content:"";
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.55);
    z-index:-1;
}

h1{
    margin-top:30px;
    font-size:40px;
    text-shadow:0 0 15px black;
}

select{
    padding:12px;
    border-radius:10px;
    border:none;
    font-size:16px;
    width:250px;
}

button{
    padding:12px 25px;
    font-size:18px;
    font-weight:bold;
    color:white;
    background:linear-gradient(45deg,#00c6ff,#0072ff);
    border:none;
    border-radius:12px;
    cursor:pointer;
    transition:0.4s;
    box-shadow:0 0 15px rgba(136, 158, 140, 0.6);
    animation:pulsar 1.5s infinite;
}

button:hover{
    transform:scale(1.1);
    background:linear-gradient(45deg,#ff00cc,#3333ff);
    box-shadow:0 0 25px rgba(224, 11, 178, 0.8);
}

button:active{
    transform:scale(0.95);
}

@keyframes pulsar{
    0%{
        box-shadow:0 0 10px rgba(0,114,255,0.5);
    }

    50%{
        box-shadow:0 0 25px rgba(0,114,255,1);
    }

    100%{
        box-shadow:0 0 10px rgba(0,114,255,0.5);
    }
}

.card{
    background:#222;
    padding:20px;
    margin-top:20px;
    border-radius:10px;
    display:inline-block;
    box-shadow:0 0 15px rgba(0,0,0,0.5);
    transition:0.4s;
    animation:flutuar 2s ease-in-out infinite;
}

.card:hover{
    transform:scale(1.08) rotate(1deg);
    box-shadow:0 0 25px rgba(255,255,255,0.4);
}

img{
    width:200px;
    margin-top:10px;
    border-radius:10px;
    transition:0.4s;
}

.card:hover img{
    transform:scale(1.1);
}

@keyframes flutuar{
    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-10px);
    }

    100%{
        transform:translateY(0px);
    }
}

.total{
    margin-top:20px;
    font-size:20px;
    font-weight:bold;
}

</style>
</head>

<body>

<h1>Escolha um jogo Roblox</h1>

<form method="GET" onsubmit="return validarJogo()">

<select name="roblox" id="roblox">
    <option value="">Selecione...</option>
    <option value="brookhaven">Brookhaven RP</option>
    <option value="bloxfruits">Blox Fruits</option>
    <option value="99noites">99 Nights</option>
    <option value="murder">Murder Mystery 2</option>
    <option value="prisao">Prison Life</option>
</select>

<audio autoplay loop hidden>
    <source src="audio/robloxTacos.mp3" type="audio/mpeg">
</audio>

<br><br>

<button type="submit">Mostrar</button>

</form>

<script>

function validarJogo(){

    let jogo = document.getElementById("roblox").value;

    if(jogo == ""){

        alert(" !Escolha um jogo antes de clicar em Mostrar!");
        
        return false;
    }

    return true;
}

</script>

<?php

if(isset($_GET['roblox'])){

    switch($_GET['roblox']){

        case 'brookhaven':
            $jogo = new Brookhaven(
                "Brookhaven RP",
                "Viva várias histórias em mundo aberto.",
                "Compre casas e carros e desenvolva sua vida.",
                "img/Brookhaven RP.png"
            );
        break;

        case 'bloxfruits':
            $jogo = new BloxFruits(
                "Blox Fruits",
                "Jogo inspirado em One Piece.",
                "Faça missões e evolua seu personagem.",
                "img/BloxFruits.png"
            );
        break;

        case '99noites':
            $jogo = new Noites99(
                "99 Nights",
                "Sobreviva por 99 noites.",
                "Construa abrigo rápido para sobreviver.",
                "img/99Noites.jpg"
            );
        break;

        case 'murder':
            $jogo = new Murder(
                "Murder Mystery 2",
                "Descubra o assassino.",
                "Observe os suspeitos e colete evidências.",
                "img/Muder.png"
            );
        break;

        case 'prisao':
            $jogo = new Prisao(
                "Prison Life",
                "Escolha policial ou detento.",
                "Fuja com estratégia e habilidades.",
                "img/Vida na Prisão.png"
            );
        break;

        default:
            echo "<script>alert('Jogo inválido!');</script>";
        break;
    }

    // POLIMORFISMO
    if(isset($jogo)){
        $jogo->mostrarInfo();
    }
}

Jogo::mostrarTotal();

?>

</body>
</html>