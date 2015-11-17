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

    for(var i=0; i<countries.length;i++){ //for= menas that will be executing until the process end. i= element index; i++= says to add the value
        $('.countries').append(countries[i]+","); //append= means to add
    }
    
    $('.name').text(person.name);//$ is a selector of classes in html (which is coded in thicase with jade)
    $('.age').text(person.age);
    $('.name').append(" "+countries[2]);
});




