<?php
include"../conexao.php";

$idR = $_GET["id"];


$qryyC = "";

$qry = mysqli_query($conexao, "select * from responsavel where email='$idR'") or die("n");

while($dados = mysqli_fetch_array($qry)){
    $idU = $dados['aluno'];
    if($qryyC == ""){
        $qryyC .= "idEstudante='$idU'";
    } else {
        $qryyC .= " or idEstudante='$idU'";
    }
}


$x = mysqli_query($conexao, "select * from saida where $qryyC and status='false' order by data desc") or die("asd");

$array = array();

while($dados = mysqli_fetch_array($x)){
    $data = $dados["data"];
    $id = $dados["id"];
    $status = $dados["status"];
    $idEstudante = $dados["idEstudante"];
    
    $query = mysqli_query($conexao, "select * from estudantes where id='$idEstudante'");
    
    $nomeEstudante = mysqli_fetch_assoc($query)['nome'];
    
    array_push($array, array(nomeEstudante => $nomeEstudante, data => $data, id => $id, status => $status));
}

echo json_encode($array);
// echo "select * from saida where $qryyC order by data desc";