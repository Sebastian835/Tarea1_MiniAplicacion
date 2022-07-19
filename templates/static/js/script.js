$(function() {
    $("form[name='validacion']").validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            edad: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mensaje: {
                required: true,
            },
        },
        messages: {
            nombre: {
                required: "Por favor, introduzca su nombre"
            },
            apellido: {
                required: "Por favor, introduzca su apellido",
            },
            edad: {
                required: "Por favor, introduzca su edad",
                min: "mayor de edad"
            },
            email: {
                required: "Por favor, introduzca una dirección de correo",
            },
            mensaje: {
                required: "Por favor, introduzca un mensaje",
            },
        },
        submitHandler: function(form) {
            form.submit();
            alert("DATOS INGRESADOS CON EXITO")
        }
    });
});