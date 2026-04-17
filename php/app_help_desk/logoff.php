<?php
session_start();

session_destroy(); //VAI DESTRUIR

header("Location: index.php");  //VAI VOLTAR A PAGINA INICIAL
