// alerta de llenado de campos
$(document).ready(function(){
    $("#contactanos").submit(function(event) {
        event.preventDefault();
        var nombre = $("#casilla-nombre").val()
        var apellido = $("#casilla-apellido").val()
        var correo = $("#casilla-correo").val()
        var mensaje = $("#casilla-mensaje").val()

        if (nombre === "" || apellido === "" || correo === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.")
        } else {
            alert("Mensaje enviado con éxito.")
        }
    });
});

$(document).ready(function(){
    $("#newsletter").submit(function(event) {
        event.preventDefault();
        var email = $("#casilla-email").val()

        if (email === "") {
            alert("Por favor, complete todos los campos.")
        } else {
            alert("Mensaje enviado con éxito.")
        }
    });
});