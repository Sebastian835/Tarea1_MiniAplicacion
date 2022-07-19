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
                min: 18
            },
            email: {
                required: true,
                email: true
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
                required: "Por favor, introduce una dirección de correo",
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});