<?php
include"../conexao.php";

$id = $_GET["id"];

$array = array();

$x = mysqli_query($conexao, "select * from saida where idEstudante='$id' order by status, data desc");

while($dados = mysqli_fetch_array($x)){
    $data = $dados["data"];
    $id = $dados["id"];
    $status = $dados["status"];
    
    array_push($array, array(data => $data, id => $id, status => $status));
}

echo json_encode($array);