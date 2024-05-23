$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // Aquí puedes manejar los errores de validación del formulario
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto

            // Obtener los valores del formulario
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            // Deshabilitar el botón de envío para prevenir múltiples envíos
            var $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    // Mostrar mensaje de éxito
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    // Reiniciar el formulario
                    $('#contactForm').trigger("reset");
                },
                error: function () {
                    // Mostrar mensaje de error
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger')
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
                    $('#success > .alert-danger')
                        .append($("<strong>").text("Lo siento " + name + ",  parece que nuestro servidor de correo no responde. ¡Por favor, inténtelo de nuevo más tarde!"));
                    $('#success > .alert-danger')
                        .append('</div>');

                    // Reiniciar el formulario
                    $('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Habilitar el botón de envío después de un segundo
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
