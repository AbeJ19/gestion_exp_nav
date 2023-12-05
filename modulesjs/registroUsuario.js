$(function () {
  $.validator.setDefaults({
    submitHandler: function () {
      $.ajax({
        method: "POST",
        data: $('#frmRegistro').serialize(),
        url: "../procesos/usuarios/registro/agregarUsuario.php",
        success: function (res) {
          res = res.trim();
          if (res == 1) {
            alertify.success('Usuario creado exitosamente');
            setTimeout(() => {
              document.location.href = './homepage.php?modulo=usuario-listado'
            }, 1000)
          } else if (res == 2) {
            alertify.error('El usuario o identificación introducida ya existe.');
          }
          else {
            alertify.error('Error inesperado, redirigiendo.');
            setTimeout(() => {
              document.location.href = './homepage.php?modulo=usuario-listado'
            }, 1000)
          }
        }
      });
      return false;
    },
  });
  $('#frmRegistro').validate({
    rules: {
      nombres: {
        required: true,
        lettersonly: true
      },
      apellidos: {
        required: true,
        lettersonly: true
      },
      cedula: {
        required: true,
        digits: true,
      },
      sexo: {
        required: true,
        lettersonly: true
      },
      usuario: {
        required: true,
        lettersonly: true
      },
      clave: {
        required: true,
        passwordtext: true,
        minlength: 8,
        maxlength: 12,
      },
      rolusuario: {
        required: true,
        number: true,
      }
    },
    messages: {
      nombres: {
        required: "Por favor introduzca los nombres del usuario",
      },
      apellidos: {
        required: "Por favor introduzca los apellidos del usuario",
      },
      cedula: {
        required: "Por favor introduzca el número de identificación del usuario",
        digits: "Por favor inserte solo números enteros positivos",
      },
      sexo: {
        required: "Por favor introduzca el género del usuario",
      },
      usuario: {
        required: "Por favor introduzca el nombre de usuario",
      },
      clave: {
        required: "Por favor introduzca la contraseña del usuario",
        minlength: "La contraseña debe ser de 8 carácteres",
        maxlength: "La contraseña debe ser de 12 carácteres máximo"
      },
      rolusuario: {
        required: "Por favor introduzca el rol del usuario a crear",
      }
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
    return this.optional(element) || /^[a-z 0-9 áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
  }, "La contraseña solo debe tener combinaciones de números y letras");
  jQuery.validator.addMethod("floatnumbers", function (value, element) {
    return this.optional(element) || /^\d{0,15}(\.\d{0,5})?$/i.test(value);
  }, "Solo se admiten números de hasta 5 decimales positivos");
});