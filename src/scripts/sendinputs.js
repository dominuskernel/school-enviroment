/**
 * Created by promodominus on 2/11/15.
 */

$(document).ready(function(){
    $(".navbar-nav").children().click(function(){
        $(".navbar-nav").find('li.active').removeClass('active');
        $(this).addClass('active');
    });// if there are no interaction with database there is no backend or php code to add.
    var action = {
        action: "get"
    }
    
    $.ajax({ // ajax help to obtain-send data that not necessary it's a database, it can be also some data of a another page.
        type: 'POST',
        url: 'http://school.dev:8000/subscriptions.php',
        data: action,
        dataType: 'json',
        success: function(sendSubs){ //there was a connection with the backend and it can respond this connection and this data correspond to the data type assigned (Json in this case)
            var obj = sendSubs;
            $('tbody').html(obj);// it adds the html variable of 'tbody'
            $(".del").click(function(){
                var email = { // (this) it remembers where you have realized the event which could be a click event or a hover one.

                    email:$(this).parent().siblings()[1].textContent,   //parent it's the html element above the button, in this case the row, the row itself has several cells at the same level
                    action: "delete"
                };     // which are identified as siblings; siblings are counted looking the father and incrementally; [1] is the chosen sibling;
                // .textcontent is a method that turns the html in text.
                console.log(email.email);
                $.ajax({//says me that i am interacting with another element that in this case in on another server which is the backend server (PHP)
                    type: 'POST', // post will relate always to send data
                    url: 'http://school.dev:8000/deleteData.php', // its the backend destination for the delete function
                    data: email,// it's the object that I am going to send to the backend.
                    dataType: "text",// is the answer of the backend after my send
                    success: function(msg){
                        location.reload();
                    },
                    error: function(){
                        console.log("No se ha recibido los datos correctamente");
                    }
                });
            });
        },
        error: function(){ //the connection with the database it has not been successful. and the data does correspond tp the data type assigned.
            alert("Error al recibir los datos");
        }
    });
    $("form").submit(function(event){
        var dataForm = $(this).serializeArray();
        JSON.stringify(dataForm); //data type structure
        var subsciption = {
            name: dataForm[0].value,
            email: dataForm[1].value,
            action: "post"
        };

        $.ajax({
            type: 'POST', // we're imputing
            url: 'http://school.dev:8000/subscriptions.php', //it's the url where we are going to put the data
            data: subsciption, // it's the variable - object that we are inputting and in in this case it's specified above
            dataType: 'text', // it's the data type we are inputting in the Backend
            success: function (msg){ //it's the function it is executed successfully
                console.log(msg); //this the message we want to appear in the console browser when we execute the function.
            },
            error: function(){//it's the function that is executed when there is something miss
                alert('Error al enviar los datos');
            }
        });
    });
});
