<?php

 header('Access-Control-Allow-Origin: *');
 if(isset($_POST['num1']) && isset($_POST['num2'])){
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    echo "numero 1: ".$num1."<br>numero 2: ".$num2;
 }else{
    echo "Erro al recibir los datos";
 }
?>