/**
 * Created by promodominus on 2/11/15.
 */

$(document).ready(function(){
    $(".navbar-nav").children().click(function(){
       $(".navbar-nav").find('li.active').removeClass('active');
       $(this).addClass('active');
    });
    $.ajax({
        url: 'http://school.dev:8000/sendSubscription.php',
        data: '',
        dataType: 'json',
        success: function(data){
            var obj = data;
            $('tbody').html(obj);
            $(".del").click(function(){
                var email = {
                    email :$(this).parent().siblings()[1].textContent
                };
                console.log(email.email)
                $.ajax({
                    type: 'POST',
                    url: 'http://school.dev:/deleteData.php',
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
        error: function(){
            alert("Error al recibir los datos");
        }
    });
    $("form").submit(function(event){
        var dataForm = $(this).serializeArray();
        JSON.stringify(dataForm);
        var subsciption = {
            name: dataForm[0].value,
            email: dataForm[1].value
        };

        $.ajax({
            type: 'POST',
            url: 'http://school.dev:8000/getSubscription.php',
            data: subsciption,
            dataType: 'text',
            success: function (msg){
                console.log(msg);
            },
            error: function(){
                alert('Error al enviar los datos');
            }
        });
    });
});
