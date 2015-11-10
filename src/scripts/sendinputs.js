/**
 * Created by promodominus on 2/11/15.
 */

$(document).ready(function(){
    $(".navbar-nav").children().click(function(){
        $(".navbar-nav").find('li.active').removeClass('active');
        $(this).addClass('active');
    });// if there are no interaction with database there is no backend or php code to add.
    $.ajax({ // ajax help to obtain-send data that not necessary it's a database, it can be also some data of a another page.
        url: 'http://school.dev:8000/sendSubscription.php',
        data: '',
        dataType: 'json',
        success: function(sendSubs){ //there was a connection with the backend and it can respond this connection and this data correspond to the data type assigned (Json in this case)
            var obj = sendSubs;
            $('tbody').html(obj);
            $(".del").click(function(){
                var email = {
                    email :$(this).parent().siblings()[1].textContent
                };
                console.log(email.email)
                $.ajax({
                    type: 'POST',
                    url: 'http://school.dev:8000/deleteData.php',
                    data: email,
                    dataType: "text",
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
            email: dataForm[1].value
        };

        $.ajax({
            type: 'POST', // we're imputing
            url: 'http://school.dev:8000/getSubscription.php', //it's the url where we are going to put the data
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
