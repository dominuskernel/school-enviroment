/**
 * Created by promodominus on 31/10/15.
 */
$(document).ready(function(){
    $(".send").click(function(){
        var nums = {
            num1: '5',
            num2: '10'
        };

        $.ajax({
            type: "POST",
            url: 'http://school.dev:8000/getdata.php',
            crossDomain: true,
            data: nums,
            dataType: "html",
            success: function (msg){
                $(".nums").html(msg);
            },
            error: function(error){
                console.log(error);
            }
        });
    });

    $.ajax({
        url: 'http://school.dev:8000/index.php',
        data: "",
        dataType: "text",
        success: function(data){
            var objs = data;
            console.log(data);
            $(".things").text(objs);
        },
        error: function(error){
            console.log(error);
        }
    });
});