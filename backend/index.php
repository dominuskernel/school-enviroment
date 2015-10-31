<?php
    header('Access-Control-Allow-Origin: *');
    $num1 = 5;
    $num2 = 10;
    $total = $num2 + $num1;

    ob_start();

    function mult($num){
        $multTotal = $num * 2;
        return $multTotal;
    }

    $rest = mult($total);


    echo "Resultado:\r\n".$rest;

    $objs = ["coche","cama","sofa","silla"];

    foreach($objs as $obj){
        if($obj == "cama"){
            echo "<br>Encontramos la ".$obj;
        }
    }

    ob_end_clean();
    echo json_encode($objs);
?>