$(function () {
    $.validator.setDefaults({
      submitHandler: function(){
        var formData = new FormData(document.getElementById('frmsubidaDocumento'));
      $.ajax({
        url:"../procesos/subirArchivos.php",
        type:"POST",
        datatype:"html",
        data:formData,
        cache:false,
        contentType:false,
        processData:false, 
        success: function(res){
          res = res.trim();
          if (res == 0){
            alertify.error('Suba por favor un archivo.');
          }else if(res == 1) {
          alertify.success('Documento subido exitosamente');
          $("#frmsubidaDocumento")[0].reset();
          }else if (res == 2){
            alertify.error('Documento ya existe');
          }else if (res == 3){
            alertify.error('Formato inválido. Inserte documento en PDF');
          }else{
            alertify.error('Error inesperado.');
          }
        }
        });
      return false;
    },
    });
    $('#frmsubidaDocumento').validate({
      rules: {
        nombre_documento: {
          required:true,
        },
        documento: {
          required:true,
        }
      },
      messages: {
        nombre_documento: {
          required: "Por favor inserte el nombre del documento que compone el expediente",
        },
        documento: {
          required: "Por favor suba el documento escaneado",
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
    jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z ()-_]+$/i.test(value);
    }, "Inserte un nombre de archivo válido"));
    jQuery.validator.addMethod("passwordtext", function(value, element) {
          return this.optional(element) || /^[a-z0-9áãâäàéêëèíîïìóõôöòúûüùçñ]+$/i.test(value);
      }, "La contraseña solo debe tener combinaciones de números y letras");
      jQuery.validator.addMethod("floatnumbers", function (value, element) {
          return this.optional(element) || /^\d{0,15}(\.\d{0,5})?$/i.test(value);
      }, "Solo se admiten números de hasta 5 decimales positivos");
  });