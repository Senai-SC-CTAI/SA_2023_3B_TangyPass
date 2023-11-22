<?php
include"../conexao.php";

$cod = $_GET["cod"];

if($cod){
    $xx = mysqli_query($conexao, "select * from qrcode where qrCode='$cod'");
    
    if(mysqli_num_rows($xx) > 0){
        $xxA = mysqli_fetch_assoc($xx);
        
        $xxId = $xxA["idUser"];
        
        $aa = mysqli_query($conexao, "select * from estudantes where id='$xxId'");
        
        if(mysqli_num_rows($aa) > 0){
            $aaA = mysqli_fetch_assoc($aa);
            $aaN = $aaA["nome"];
            $aaE = $aaA["email"];
            $aaS = $aaA["sala"];
            
            echo json_encode(array(nome => $aaN, user => $aaE, sala => $aaS));
            exit;
        }
    }
}

echo json_encode(array(erro => "error"));

?>
