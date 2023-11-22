<?php
include"../conexao.php";

$query = mysqli_query($conexao, "select * from estudantes");

$lista = array();

while($dados = mysqli_fetch_array($query)){
    $id = $dados["id"];
    $nome = $dados["nome"];
    $user = $dados["email"];
    $sala = $dados["sala"];
    $lastLog = $dados["lastLogin"];
    
    array_push($lista, array(id => $id, nome => $nome, user => $user, lastLog => $lastLog, sala => $sala));
}

echo json_encode($lista);