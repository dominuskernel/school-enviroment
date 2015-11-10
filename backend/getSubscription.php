<?php
    header('Access-Control-Allow-Origin: *'); // when we use the cross domain this says that information can be sent between each others.
    if(isset($_POST['name']) && isset($_POST['email'])) { //isset detect if there is content in the $_POST; && double condition of content presence need to be satisfied.
        $database = new mysqli("localhost","root","prueba","example"); //mysqli it's a php class, it is not a style class at all!! it is called method and when you have multiple function and you want to group all the common function in a macro class.
        if($database->connect_error){
            die("No conecta a la base de datos");
        }
        $name = $_POST['name'];
        $email = $_POST['email'];
        $database->query("insert into subscription(name,email) values('$name','$email')") or  //it's SQL languageit says in sent my name, email input value in the sql table
        die($database->error); //if there is an error inputting data it will deliver an error, breaking the execution of the process.
        $database->close(); // it close the database connection
        echo 'La subscripción se realizo con exito'; // it is a successfull message for the backend. it does not proved that data have been saved correctly
    }else{
        echo "Error a tratar los datos recibidos"; // this happen in case the If(isset condition are not satisfied
    }
?>