$(function () {
    $.validator.setDefaults({
      submitHandler: function(){
      $.ajax({
        method: "POST",
        data: $('#frmBuque').serialize(),
        url: "../procesos/usuarios/registro/agregarBuque.php",
        success: function(res){
        res = res.trim();
          if(res == 1) {
            alertify.success('Buque creado exitosamente');
          setTimeout(()=>{
            document.location.href = './homepage.php?modulo=buque-listado'
            },1000)
          } else if (res == 2){
            alertify.error('El IMO o el número MMSI introducido ya existe.');
          }else {
            alertify.error('Error inesperado, redirigiendo.');
            setTimeout(()=>{
            document.location.href = './homepage.php?modulo=usuario-listado'
            },1000)
          }
        }
        });
      return false;
    },
    });
    $('#frmBuque').validate({
      rules: {
        nombre: {
          required: true,
          shipname:true
        },
        bandera: {
          required: true,
          lettersonly:true
        },
        imo: {
          required: true,
          digits: true,
          minlength:1,
          maxlength:7
        },
        mmsi: {
          required:true,
          digits:true,
          minlength:1,
          maxlength:9
        },
        eslora:{
          required:true,
          floatnumbers:true
        },
        grt:{
          required:true,
          floatnumbers:true
        },
        nrt:{
          required:true,
          number:true,
          floatnumbers:true
        },
        clasebuque: {
          required:true,
        },
        tipobuque: {
          required:true,
        },
      },
      messages: {
        nombre: {
          required: "Inserte el nombre del buque",
        },
        bandera: {
          required: "Ingrese la bandera del buque",
          lettersonly:"Inserte solamente caracteres"
        },
        imo: {
          required: "Ingrese el número IMO del buque",
          digits: "Inserte solamente números positivos",
          minlength:"Ingrese al menos un caracter",
          maxlength:"El máximo de digitos para el IMO es de 7 caracteres"
        },
        mmsi: {
          required:"Ingrese el número MMSI del buque",
          digits:"Inserte solamente números positivos",
          minlength:"Ingrese al menos un caracter",
          maxlength:"El máximo de digitos para el MMSI es de 9 caracteres"
        },
        eslora:{
          required:"Ingrese la eslora del buque",
        },
        grt:{
          required:"Ingrese el GRT del buque",
          passwordtext:"",
  
        },
        nrt:{
          required:"Ingrese el NRT de el buque",
        },
        tipobuque: {
          required:"Ingrese el tipo de buque",
        },
        clasebuque: {
          required:"Ingrese la clasificación del buque",
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
    jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
    }, "El usuario solo debe contener letras"));
    jQuery.validator.addMethod("shipname", function(value, element) {
      return this.optional(element) || /^[a-z0-9 ()áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
      }, "Ingrese un nombre de buque válido");
    jQuery.validator.addMethod("passwordtext", function(value, element) {
          return this.optional(element) || /^[a-z0-9áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
      }, "La contraseña solo debe tener combinaciones de números y letras");
      jQuery.validator.addMethod("floatnumbers", function (value, element) {
          return this.optional(element) || /^\d{0,15}(\.\d{0,5})?$/i.test(value);
      }, "Solo se admiten números de hasta 5 decimales positivos");
  });