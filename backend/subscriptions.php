<?php
    header('Access-Control-Allow-Origin: *');
    class Subcriptions{
        private $database;
        
        public function __construct($url,$user,$pwd,$db){
            $this->database = new mysqli($url,$user,$pwd,$db);
            if($this->database->connect_error){
                die("No conecta a la base de datos");
            }
        }
        
        public function writeData($name,$email){
            $this->database->query("insert into subscription(name,email) values('$name','$email')") or
                die($database->error);
            $this->database->close();
            echo 'La subscripción se realizo con exito';
        }
        
        public function sendData(){
            $subscriptors = $this->database->query("select name, email from subscription") or
                die($this->database->error);
            while($subs=$subscriptors->fetch_array()){
                $sendSubs = $sendSubs.
                    "<tr><td>"
                        .$subs['name']
                    ."</td><td>"
                        .$subs['email']
                    ."</td><td><button type='button' class='btn btn-danger del'>Delete</button></tr>";
            }
            $this->database->close();
            echo json_encode($sendSubs);
        }
        
        public function delSubscriptions($email){
            $sql = "DELETE FROM subscription WHERE email='".$email."'";
            $this->database->query($sql) or
                die("No se ha podido borrar la subscripcion");
            $this->database->close();
            echo json_encode("La subscripción se ha borrado correctamente");
        }
    }
    
    if(isset($_POST['action'])){
        $database = new Subcriptions('localhost', 'root', 'prueba', 'example');
        switch ($_POST['action']){
            case 'post':
                if(isset($_POST['name']) && isset($_POST['email'])){
                    $database->writeData($_POST['name'],$_POST['email']);
                }
                break;
            case 'get':
                $database->sendData();
                break;
            case 'delete':
                if(isset($_POST['email'])){
                    $database->delSubscriptions($_POST['email']);
                }
                break;
        }
    }
?>
