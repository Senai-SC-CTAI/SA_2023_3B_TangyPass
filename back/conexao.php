<?php
session_start();

header("X-Robots-Tag: noindex", true);
header('Content-Type: application/json; charset=utf-8');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

date_default_timezone_set('America/Sao_Paulo');
$conexao = mysqli_connect('localhost','u752370168_sa','Easycodex123','u752370168_sa') or die ("Atualize a página e tente novamente!");

$url = $_SERVER[HTTP_HOST];
$urlContent = $_SERVER[REQUEST_URI];