<?php
include"../conexao.php";

$corpo_bruto = file_get_contents("php://input");
$dados = json_decode($corpo_bruto);

$codigo = $dados->codigo;
$id = $dados->id;

$xx = mysqli_query($conexao, "select * from qrcode where qrCode='$codigo' and readed='false'");

$time = time();

if(mysqli_num_rows($xx) > 0){
    $getUser = mysqli_query($conexao, "select * from estudantes where id='$id'");
    if(mysqli_num_rows($getUser) > 0){
        
        $xxA = mysqli_fetch_assoc($getUser);
        
        $nome = $xxA["nome"];
        $email = $xxA["email"];
        
        mysqli_query($conexao, "update qrcode set readed='true', readTime='$time', idUser='$id' where qrCode='$codigo'");
        
        echo json_encode(array(email => $email, nome => $nome));
        
        exit;
    }
    
}

echo json_encode(array(erro => "error"));


