<?php

 header('Access-Control-Allow-Origin: *');
 if(isset($_POST['data'])){
    $nums = $_POST['data'];
    echo $nums;
 }else{
    echo "No hay contenido";
 }
?>