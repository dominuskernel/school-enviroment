$(document).ready(function(){
    var num1 = 5;
    var num2 = 3;
    $('.sum').click(function(){
        var total = num1 + num2;
        alert(total);
    });
    $('.change-color').click(function(){
        console.log("entro");
        if($('.text').hasClass('color1')){
            $('.text').removeClass('color1');
            $('.text').addClass('color2');
        }else{
            $('.text').removeClass('color2');
            $('.text').addClass('color1');
        }
    });

    $('.check').click(function(){
        var value = $('.house').val();
        if(value=="house"){
            alert("Good. You wrote house");
        }else{
            alert("Please. Write house");
        }
    });
    for(var i =0 ; i < $('button').length; i++){
        $('.elements').append('<p>There is button ' + (i+1) + '</p>');
    }
});




