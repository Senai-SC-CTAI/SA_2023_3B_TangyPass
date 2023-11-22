<?php
include"../conexao.php";

$xx = mysqli_query($conexao, "select * from qrcode where readed='false'") or die("eer");

$xxRows = mysqli_num_rows($xx);

$time = time();

if($xxRows < 1){
    mysqli_query($conexao, "insert into qrcode (qrCode, readed) values ('$time', 'false')");
    $qr = "$time";
}

if($xxRows > 0){
    $assoc = mysqli_fetch_assoc($xx);
    $readed = $assoc["readed"];
    
    if($readed == "false"){
        $qr = $assoc["qrCode"];
    } else {
        mysqli_query($conexao, "insert into qrcode (qrCode, readed) values ('$time', 'false')");
        $qr = "$time";
    }
}


echo json_encode(array($qr));