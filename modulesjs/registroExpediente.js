$(function () {
  $('#frmregistroExpediente').validate({
    rules: {
      barco_id: {
        required: true,
      },
      fecha_expediente: {
        required: true,
      },
    },
    messages: {
      barco_id: {
        required: 'Por favor complete el campo',
      },
      fecha_expediente: {
        required: 'Por favor complete el campo',
      },
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    }
  },
    jQuery.validator.addMethod("lettersonly", function (value, element) {
      return this.optional(element) || /^[a-z áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
    }, "El usuario solo debe contener letras"));
  jQuery.validator.addMethod("passwordtext", function (value, element) {
    return this.optional(element) || /^[a-z0-9áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
  }, "La contraseña solo debe tener combinaciones de números y letras");
  jQuery.validator.addMethod("floatnumbers", function (value, element) {
    return this.optional(element) || /^\d{0,15}(\.\d{0,5})?$/i.test(value);
  }, "Solo se admiten números de hasta 5 decimales positivos");
});