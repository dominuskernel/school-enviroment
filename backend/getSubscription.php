<?php
    header('Access-Control-Allow-Origin: *');
    if(isset($_POST['name']) && isset($_POST['email'])) {
        $database = new mysqli("localhost","root","prueba","example");
        if($database->connect_error){
            die("No conecta a la base de datos");
        }
        $name = $_POST['name'];
        $email = $_POST['email'];
        $database->query("insert into subscription(name,email) values('$name','$email')") or
        die($database->error);
        $database->close();
        echo 'La subscripción se realizo con exito';
    }else{
        echo "Error a tratar los datos recibidos";
    }
?>