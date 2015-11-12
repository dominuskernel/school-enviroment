/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var name = "Lydia";
    var surname = "Garcia";
    var age = "28";
    var countries = ['Spain', 'Italian', 'Germany','French']

    var person = {
        name: name,
        surname: surname,
        age: age,
        country: countries[1]
    }

    for(var i=0; i<countries.length;i++){
        $('.countries').append(countries[i]+",");
    }
    
    $('.name').text(person.name);
});




