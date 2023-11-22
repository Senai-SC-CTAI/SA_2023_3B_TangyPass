<?php
include"../conexao.php";

$data = $_GET["data"];
$id = $_GET["id"];

$qr = mysqli_query($conexao, "select * from saida where data='$data' and idEstudante='$id'");

if(mysqli_num_rows($qr) < 1){
    mysqli_query($conexao, "insert into saida (data, idEstudante) values ('$data', '$id')") or die(json_encode(array("status" => "error")));
    $x = mysqli_query($conexao, "select * from saida where idEstudante='$id' order by id desc");
    
    $idPedido = mysqli_fetch_assoc($x)['id'];
    
    echo json_encode(array("status" => "Sucesso", "idPedido" => $idPedido));
    exit;
};

echo json_encode(array("status" => "Erro", "idPedido" => '!'));


