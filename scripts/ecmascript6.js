"use strict";

class ControllerWeb{
  constructor(){
    this.getJSON();
    this.showAlert();
    this.addText();
  }

  getJSON(){
    $.ajax({
        type: 'GET',
        url: '../data/data.json',
        data: "",
        datatype: "json",
        success: (object) => {
            for (var i = 0; i < object.length; i++) {
                $(".list-group").append(object[i].li);
            }
        },
        error: () => {
            alert("No se ha podido obtener el JSON");
        }
    });
  }

  showAlert(){
    $('.alert-message').click(() => {
        alert("Se ha mostrado el mensaje");
    })
  }
}

class inheritClass extends ControllerWeb{
  addText(){
    $('.add-text').click(() => {
        $('.show-text').append('Added text. ');
    });
  }
}


$(document).ready(() => {
  var controller = new inheritClass();
});
