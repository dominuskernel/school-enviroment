/**
 * Created by lydialavecchia on 13/02/2016.
 */
var sum = function(num1,num2){
 var result = num1 + num2;

    return result
};
console.log (sum(10,2));


var adivina = function(number){
    var response;
        if(number == 5){
            response = "OK!"
        } else {
            response = "NO!"
        }
    return response;
};
console.log(adivina(5))


var myArray = [1,2,3,4];
var list = function(array){
    for(i=0; i < array.length; i++){
        console.log(array[i]);
    }
};
list(myArray);
