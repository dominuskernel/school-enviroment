$(document).ready(function() {
    var ControllerWeb = {
        init: function(){
            ControllerWeb.getJSON();
            ControllerWeb.showAlert();
            ControllerWeb.addText();
        },
        getJSON : function(){
            $.ajax({
                type: 'GET',
                url: '../data/data.json',
                data: "",
                datatype: "json",
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