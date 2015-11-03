<?php
    header('Access-Control-Allow-Origin: *');
    $database = new mysqli("localhost","root","prueba","example");
    if($database->connect_error){
        die("No conecta a la base de datos");
    }
    $subscriptors = $database->query("select name, email from subscription") or
        die($database->error);

    while($subs=$subscriptors->fetch_array())
    {
        $sendSubs = $sendSubs.
            "<tr><td>"
                .$subs['name']
            ."</td><td>"
                .$subs['email']
            ."</td><td><button type='button' class='btn btn-danger del'>Delete</button></tr>";
    }
    echo json_encode($sendSubs);
?>
