<?php
    header('Access-Control-Allow-Origin: *');
    include './subscriptions.php';
    
    class Search extends Subcriptions{
        private $search_database;
        public function __construct($url,$user,$pwd,$db){
            parent::__construct($url,$user,$pwd,$db);
            $this->search_database = $this->database;
        }
        
        public function search($search){
            $sql = "select * from subscription where name LIKE '".$search."%'";
            $subscritionSearch = $this->search_database->query($sql) or
                    die($this->search_database->error);
            while($subs=$subscritionSearch->fetch_array()){
                $sendSubs = $sendSubs.
                    "<tr><td>"
                        .$subs['name']
                    ."</td><td>"
                        .$subs['email']
                    ."</td><td><button type='button' class='btn btn-danger del'>Delete</button></tr>";
            }
            $this->search_database->close();
            echo json_encode($sendSubs);
        }       
    }
    
    if(isset($_POST['search'])){
        $database = new Search('localhost', 'root', 'prueba', 'example');
        if($_POST['search']!=""){
            $database->search($_POST['search']);
        }  else {
            $database->sendData();
        }
        
    }
