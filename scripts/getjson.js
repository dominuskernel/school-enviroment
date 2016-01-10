$(document).ready(function() { //read the doom and page structure to execute js
    var ControllerWeb = {//controllerweb is an 'object'
        init: function(){// init recall all the methods of the page
            ControllerWeb.getJSON();//initi and get json, show alert, add text are methods;
            ControllerWeb.showAlert();
            ControllerWeb.addText();
        },
        getJSON : function(){
            $.ajax({//ajax obtain and send code from and to other places.
                type: 'GET',
                url: '../data/data.json',
                data: "",
                datatype: "json",//data type is what the ajax is expected to receive. It will match the url
                success: function (object) {
                    for (var i = 0; i < object.length; i++) {
                        $(".list-group").append(object[i].li);
                    }
                },
                error: function () {
                    alert("No se ha podido obtener el JSON");
                }
            });
        },
        showAlert: function(){
            $('.alert-message').click(function(){
                alert("Se ha mostrado el mensaje");
            })
        },
        addText: function() {
            $('.add-text').click(function () {
                $('.show-text').append('Added text. ');
            });
        }
    }

    ControllerWeb.init();
});