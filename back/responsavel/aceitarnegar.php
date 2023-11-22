<?php
include"../conexao.php";

$idR = $_GET["id"];
$type = $_GET["type"];

if(!$idR){
    echo "Falha";
    return;
}

$query = mysqli_query($conexao, "select * from saida where id='$idR' and status='false'")  or die("Falha");

if(mysqli_num_rows($query) > 0){
    if($type == "negar"){
        mysqli_query($conexao, "delete from saida where id='$idR'")  or die("Falha");
        echo "Sucesso";
        return;
    }
    
    
    mysqli_query($conexao, "update saida set status='true' where id='$idR'") or die("Falha");
    echo "Sucesso";
    return;
}

echo "Falha";