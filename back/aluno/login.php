<?php

include"../conexao.php";

$corpo_bruto = file_get_contents("php://input");
$dados = json_decode($corpo_bruto);

$user = $dados->user;
$password = $dados->password;

$query = mysqli_query($conexao, "select * from estudantes where email='$user' and password='$password'");

if(mysqli_num_rows($query) > 0){
    $id = mysqli_fetch_assoc($query)["id"];
    echo json_encode(array(status => "found", id => $id));
    exit;
}

 echo json_encode(array(status => "error"));