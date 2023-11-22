<?php
include"../conexao.php";

header('Content-Type: application/json');

$req = file_get_contents('php://input');
$json = json_decode($req);

$id_estudante = mysqli_real_escape_string($conexao, $json->id);
$email =  mysqli_real_escape_string($conexao, $json->email);

$pass = "123";

if($id_estudante and $email){
    $check = mysqli_query($conexao, "select * from estudantes where id='$id_estudante'");
    
    if(mysqli_num_rows($check) > 0){
        $check = mysqli_query($conexao, "select * from responsavel where aluno='$id_estudante' and email='$email'");
        
        if(mysqli_num_rows($check) < 1){
            mysqli_query($conexao, "insert into responsavel (email, senha, aluno) values ('$email', '$pass', '$id_estudante')");
            echo json_encode(array("status" => "Sucesso!"));
            return;
        }
        
        echo json_encode(array("status" => "Responsável já cadastrado!"));
        return;
    }
}

echo json_encode(array("status" => "Falha"));
return;

