<?php
    header('Access-Control-Allow-Origin: *');
    if(isset($_POST['email'])){//isset verifies that the back end has receive something with 'email' name; which is yes in this case as specified in the senddata.js in the email object
        $database = new mysqli('localhost','root','prueba','example'); //
        if($database->connect_error){
            die("No conecta a la base de datos");
        }
        $email = $_POST['email'];
        $sql = "DELETE FROM subscription WHERE email='".$email."'";
        $database->query($sql) or
            die("No se ha podido borrar la subscripcion");
        echo json_encode("La subscripción se ha borrado correctamente");
    }else{
        echo json_encode("Se han producido errores al enviar los datos");
    }
?>