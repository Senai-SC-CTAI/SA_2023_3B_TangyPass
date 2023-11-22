<?php
include"../conexao.php";

$id = $_GET["id"];
$idUser = $_GET["idUser"];

mysqli_query($conexao, "delete from saida where id='$id' and idEstudante='$idUser'") or die ("Falha");

echo "Sucesso";