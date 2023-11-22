<?php
include"../conexao.php";

$id = $_GET["id"];

$query = mysqli_query($conexao, "select * from estudantes where id='$id'");

$lista = array();

if(mysqli_num_rows($query) > 0){
    $query2 = mysqli_query($conexao, "select * from qrcode where idUser='$id'");
    
    while($dados = mysqli_fetch_array($query2)){
        array_push($lista, array(horario => $dados['readTime'], type => "entrada"));
    }
    
    echo json_encode($lista);
    exit;
    
}

echo json_encode(array(status => "erro"));