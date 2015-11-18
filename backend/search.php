<?php
    header('Access-Control-Allow-Origin: *');
    include './subscriptions.php'; //take me all the class to inherit them and use them for the below.
    
    class Search extends Subcriptions{//class search has been set by F. could have been another think. Extends means that all the methods of Sunscriotion class can be used also for search class.
        private $search_database; //attribute which  you are going to use in every method. private means that we can access that the function just from search class.
        public function __construct($url,$user,$pwd,$db){ // __construct when you call the class execute the method
            parent::__construct($url,$user,$pwd,$db);
            $this->search_database = $this->database; //
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
