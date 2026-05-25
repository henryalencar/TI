PERSONAGENS <?php
 
// INTERFACE
 
interface JogoInterface{
    public function mostrarInfo();
}
 
 
//  ABSTRATA
 
 
abstract class Jogo implements JogoInterface{
 
    // ENCAPSULAMENTO
    protected $nome;
    protected $descricao;
    protected $dicas;
    protected $imagem;
 
    // ESTÁTICO
    public static $totalJogos = 0;
 
    // CONSTRUTORR
    public function __construct($nome,$descricao,$dicas,$imagem){
 
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->dicas = $dicas;
        $this->imagem = $imagem;
 
        self::$totalJogos++;
    }
 
    /// METODO ESTÁTICO
public static function mostrarTotal(){
 
    // SÓ MOSTRA SE ESCOLHER UM JOGO
    if(self::$totalJogos > 0){
 
        echo "
        <div class='total-jogos'>
             Jogos escolhidos: ".self::$totalJogos."
        </div>";
    }
}
 
    // CARD
    public function exibirCard(){
 
        echo "
        <div class='card'>
 
            <img src='{$this->imagem}' alt='{$this->nome}'>
 
            <div class='conteudo'>
 
                <h2>{$this->nome}</h2>
 
                <p class='descricao'>
                    {$this->descricao}
                </p>
 
                <div class='dica'>
                     {$this->dicas}
                </div>
 
            </div>
 
        </div>";
    }
 
    // MÉTODO ABSTRATO
    abstract public function mostrarInfo();
}
 
//
// HERANÇA DELES
//
 
class Brookhaven extends Jogo{
    public function mostrarInfo(){
        $this->exibirCard();
    }
}
 
class BloxFruits extends Jogo{
    public function mostrarInfo(){
        $this->exibirCard();
    }
}
 
class Noites99 extends Jogo{
    public function mostrarInfo(){
        $this->exibirCard();
    }
}
 
class Murder extends Jogo{
    public function mostrarInfo(){
        $this->exibirCard();
    }
}
 
class Prisao extends Jogo{
    public function mostrarInfo(){
        $this->exibirCard();
    }
}
 
?>
 
<!DOCTYPE html>
<html lang="pt-br">
 
<head>
 
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 
<title>Roblox | Melhores Jogos</title>
 
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
 
<style>
 
 
/* RESET */
 
 
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
 
 
/* BODY */
 
 
body{
 
    font-family:'Poppins', sans-serif;
 
    min-height:100vh;
 
    display:flex;
    justify-content:center;
    align-items:center;
 
    text-align:center;
 
    background:url('img/robloxCapa2.jpg') center/cover no-repeat fixed;
 
    color:white;
 
    padding:40px 20px;
 
    position:relative;
}
 
body::before{
 
    content:"";
 
    position:fixed;
 
    inset:0;
 
    background:rgba(0,0,0,0.70);
 
    backdrop-filter:blur(5px);
 
    z-index:-1;
}
 
 
/* CONTAINER */
 
 
.container{
 
    width:100%;
    max-width:1200px;
 
    display:flex;
    flex-direction:column;
 
    justify-content:center;
    align-items:center;
}
 
 
/* TITULO */
 
 
h1{
 
    font-size:55px;
 
    margin-bottom:35px;
 
    font-weight:700;
 
    letter-spacing:2px;
 
    text-shadow:
    0 0 10px rgba(255,255,255,0.4),
    0 0 25px rgba(0,114,255,0.5);
 
    animation:aparecer 1s ease;
}
 
 
/* FORM */
 
 
form{
 
    width:100%;
    max-width:420px;
 
    display:flex;
    flex-direction:column;
 
    align-items:center;
    justify-content:center;
 
    gap:20px;
 
    background:rgba(255,255,255,0.08);
 
    padding:35px;
 
    border-radius:25px;
 
    backdrop-filter:blur(15px);
 
    border:1px solid rgba(255,255,255,0.15);
 
    box-shadow:
    0 0 30px rgba(0,0,0,0.5),
    0 0 20px rgba(0,114,255,0.2);
}
 
 
/* SELECT */
 
 
select{
 
    width:100%;
 
    padding:16px;
 
    border:none;
    border-radius:14px;
 
    font-size:16px;
    font-weight:500;
 
    outline:none;
 
    background:white;
 
    color:#333;
 
    transition:0.3s;
}
 
select:focus{
    transform:scale(1.02);
}
 
 
/* BOTÃO */
 
 
button{
 
    width:100%;
 
    padding:16px;
 
    border:none;
    border-radius:14px;
 
    font-size:18px;
    font-weight:bold;
 
    cursor:pointer;
 
    color:white;
 
    background:linear-gradient(45deg,#00c6ff,#0072ff);
 
    transition:0.4s;
 
    box-shadow:0 0 20px rgba(0,114,255,0.5);
}
 
button:hover{
 
    transform:translateY(-4px) scale(1.03);
 
    background:linear-gradient(45deg,#ff00cc,#3333ff);
 
    box-shadow:0 0 30px rgba(255,0,200,0.7);
}
 
button:active{
    transform:scale(0.96);
}
 
 
/* CARDs */
 
 
.card{
 
    margin-top:40px;
 
    width:100%;
    max-width:420px;
 
    background:rgba(255,255,255,0.08);
 
    border-radius:25px;
 
    overflow:hidden;
 
    border:1px solid rgba(255,255,255,0.15);
 
    backdrop-filter:blur(15px);
 
    box-shadow:
    0 10px 40px rgba(0,0,0,0.6),
    0 0 20px rgba(255,255,255,0.08);
 
    animation:subir 0.8s ease;
 
    transition:0.4s;
}
 
.card:hover{
    transform:translateY(-10px) scale(1.02);
}
 
.card img{
 
    width:100%;
 
    height:240px;
 
    object-fit:cover;
}
 
.conteudo{
    padding:30px;
}
 
.card h2{
 
    font-size:32px;
 
    margin-bottom:18px;
 
    font-weight:700;
}
 
.descricao{
 
    font-size:16px;
 
    line-height:1.8;
 
    color:#ddd;
 
    margin-bottom:20px;
}
 
.dica{
 
    background:rgba(0,0,0,0.35);
 
    padding:16px;
 
    border-radius:14px;
 
    border-left:5px solid #00c6ff;
 
    font-size:15px;
 
    line-height:1.6;
}
 
 
/* TOTAL */
 
 
.total-jogos{
 
    margin-top:30px;
 
    padding:14px 30px;
 
    background:rgba(255,255,255,0.08);
 
    border-radius:15px;
 
    backdrop-filter:blur(10px);
 
    font-weight:bold;
 
    box-shadow:0 0 15px rgba(255,255,255,0.08);
}
/* ALERTA */
 
.alerta{
 
    width:100%;
 
    padding:14px;
 
    border-radius:12px;
 
    background:rgba(255,0,0,0.15);
 
    border:1px solid rgba(255,0,0,0.4);
 
    color:#ff4d4d;
 
    font-weight:bold;
 
    animation:aparecer 0.4s ease;
}
 
/* ANIMAÇÕES */
 
 
@keyframes subir{
 
    from{
        opacity:0;
        transform:translateY(40px);
    }
 
    to{
        opacity:1;
        transform:translateY(0);
    }
}
 
@keyframes aparecer{
 
    from{
        opacity:0;
        transform:translateY(-30px);
    }
 
    to{
        opacity:1;
        transform:translateY(0);
    }
}
 
</style>
 
</head>
 
 
<body>
 
<div class="container">
 
<h1> Melhores Jogos Roblox</h1>
 
<form method="GET">
 
<select name="roblox">
 
<option value="">Selecione um jogo</option>
 
<option value="brookhaven">Brookhaven RP</option>
 
<option value="bloxfruits">Blox Fruits</option>
 
<option value="99noites">99 Nights</option>
 
<option value="murder">Murder Mystery 2</option>
 
<option value="prisao">Prison Life</option>
 
</select>
 
<button type="submit">
Mostrar Jogo
</button>
 
<div id="mensagem"></div>
 
</form>
 
<audio autoplay loop hidden>
<source src="audio/robloxTacos.mp3" type="audio/mpeg">
</audio>
 
<?php
 
if(isset($_GET['roblox'])){
 
    switch($_GET['roblox']){
 
        case 'brookhaven':
 
            $jogo = new Brookhaven(
 
                "Brookhaven RP",
 
                "Viva histórias incríveis em um mundo aberto cheio de possibilidades.",
 
                "Compre casas, carros e personalize sua vida no jogo.",
 
                "img/Brookhaven RP.png"
            );
 
        break;
 
        case 'bloxfruits':
 
            $jogo = new BloxFruits(
 
                "Blox Fruits",
 
                "Jogo inspirado no anime One Piece com batalhas épicas.",
 
                "Complete missões e evolua seus poderes.",
 
                "img/BloxFruits.png"
            );
 
        break;
 
        case '99noites':
 
            $jogo = new Noites99(
 
                "99 Nights",
 
                "Sobreviva por 99 noites enfrentando desafios.",
 
                "Construa um abrigo rapidamente para sobreviver.",
 
                "img/99Noites.jpg"
            );
 
        break;
 
        case 'murder':
 
            $jogo = new Murder(
 
                "Murder Mystery 2",
 
                "Descubra quem é o assassino antes que seja tarde.",
 
                "Observe os jogadores e colete pistas.",
 
                "img/Muder.png"
            );
 
        break;
 
        case 'prisao':
 
            $jogo = new Prisao(
 
                "Prison Life",
 
                "Escolha entre ser policial ou detento.",
 
                "Use estratégia para fugir da prisão.",
 
                "img/Vida na Prisão.png"
            );
 
        break;
    }
 
    // POLIMORFISMO
    $jogo->mostrarInfo();
}
 
// TOTAL
Jogo::mostrarTotal();
 
 
 
?>
 
<script>
// ALERTA DE NAO SELECAO
 
document.querySelector("form").addEventListener("submit", function(event){
 
    let jogo = document.querySelector("select").value;
 
    let mensagem = document.getElementById("mensagem");
 
    if(jogo == ""){
 
        event.preventDefault();
 
        mensagem.innerHTML = `
            <div class="alerta">
                ⚠️ Selecione um jogo primeiro!
            </div>
        `;
 
    }else{
 
        mensagem.innerHTML = "";
 
    }
   
 
});
 
</script>
 
</body>
 
</html>
 
 
 
 
 
 
 
 
 
 
 
<!--OUTRA FORMA DE CODIGO (MANEIRA) -- !>
 
 
 
 
 
 
 
 
 
 
 
 
<?php
// INTERFACE
interface JogoInterface {
    public function mostrarInfo();
}
 
// (ABSTRACCAO)
abstract class Jogo implements JogoInterface {
 
    // ENCAPSSULAMENTO
    protected $nome;
    protected $descricao;
    protected $dicas;
    protected $imagem;
 
    //  ESTÁTICO
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
        echo "<p>Total de jogos carregados: " . self::$totalJogos . "</p>";
    }
 
    // DESTRUCT
    public function __destruct() {
        // executa lano final
    }
 
    // MÉTODO NORMAL
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
 
// HERANÇA PARA OS FILHOS
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
box-shadow:0 0 15px rgba(0,114,255,0.6);
animation:pulsar 1.5s infinite;
}
 
button:hover{
transform:scale(1.1);
background:linear-gradient(45deg,#ff00cc,#3333ff);
box-shadow:0 0 25px rgba(201, 8, 159, 0.8);
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
background:rgba(0,0,0,0.55);
z-index:-1;
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
 
</style>
</head>
<body>
 
<h1>Escolha um jogo Roblox</h1>
 
<form method="GET">
<select name="roblox">
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
 
<?php
//FILHIS
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
    }
 
    // POLIMORFISMO
    $jogo->mostrarInfo();
}
 
Jogo::mostrarTotal();
 
?>
 
</body>
</html>
 
 