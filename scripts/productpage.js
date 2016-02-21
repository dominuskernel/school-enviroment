var productpage = function(){
    $.ajax ({
            type: 'GET',
            url: '../data/productpage.json',
            data: "" ,
            dataType: 'json',
            success: function(productpage){
                for(i=0; i < productpage.length; i++){
                    $("tbody").append("<tr><td>"+productpage[i].product_name+"</td><td>"+productpage[i].price+"</td></tr>");
                }
            }
    })
};

$(document).ready(function(){//This load the dom structure
    productpage();
});



/**
 * Created by lydialavecchia on 20/02/2016.
 */
