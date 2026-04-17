<?php
if(session_status() !== PHP_SESSION_ACTIVE){
    session_start();
}

if(!isset($_SESSION['autenticado']) || $_SESSION['autenticado'] != 'sim'){
    header('Location: index.php?login=erro2'); // ajuste caminho
    exit();
}