<?php
include"../conexao.php";

$id = $_GET["id"];

$query = mysqli_query($conexao, "select * from estudantes where id='$id'");

$assoc = mysqli_fetch_assoc($query);

$nome = $assoc["nome"];
$id = $assoc["id"];
$sala = $assoc["sala"];

$email = $assoc["email"];

$ent = mysqli_query($conexao, "select * from qrcode where idUser='$id'");
$entradas = mysqli_num_rows($ent);

$arrR = array();
$qry = mysqli_query($conexao, "select * from responsavel where aluno='$id'");

while($dados = mysqli_fetch_array($qry)){
    array_push($arrR, $dados['email']);
}



$query2 = mysqli_query($conexao, "select qrCode from qrcode where idUser='$id' order by id desc");

$lastLog = mysqli_fetch_assoc($query2)["qrCode"];

$logTimes = mysqli_num_rows($query2);

echo json_encode(array(id => $id, nome => $nome,email => $email, sala => $sala, logTimes => $logTimes, lastLog => $lastLog, entradas => $entradas, responsaveis => $arrR    ));
