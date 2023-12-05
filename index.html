<!DOCTYPE html>

<html lang="es">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Login</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="fonts/source-sans-pro.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- Icon -->
  <link rel="shortcut icon" href="media/img/logos/ship-login.jpg" />

  <style>
    .login-background {
      filter: blur(4px);
      -webkit-filter: blur(4px);
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100%;
      animation: background-login 9s ease-in-out infinite;
    }

    @keyframes background-login {

      0%,
      100% {
        background-image: url('media/img/background-login.jpg');
      }

      35% {
        background-image: url('media/img/background-login2.jpg');
      }

      70% {
        background-image: url('media/img/background-login3.jpg');
      }
    }
  </style>

</head>

<body class="hold-transition login-page">
  <div class="login-background"></div>
  <div class="login-box position-absolute">
    <div class="card">
      <div class="card-body login-card-body">
        <div class="login-logo mb-0 pb-2">
          <img src="media/img/logos/ship-login.jpg" class="img-fluid" alt="Ship-Logo" style="height:200px;">
        </div>
        <p class="login-box-msg">Introduce tus datos para iniciar sesión</p>

        <form id="frmLogin" method="post">
          <div class="form-group">
            <div class="form-group">
              <div class="input-group">
                <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Usuario">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-group">
              <div class="input-group">
                <input type="password" class="form-control" id="clave" name="clave" placeholder="Contraseña">
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4 offset-4">
              <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
            </div>
            <div class="col-12 text-center mt-2">
              <a href="./pages/homepage.html">© 2023 Click para redireccionar al inicio</a>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
  <!-- /.login-box -->

  <!-- REQUIRED SCRIPTS -->
  <!-- jQuery -->
  <script src="plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- jQuery Validation -->
  <script src="plugins/jquery-validation/jquery.validate.min.js"></script>
  <!-- AdminLTE App -->
  <script src="dist/js/adminlte.min.js"></script>
  <!-- ./REQUIRED SCRIPTS -->

  <script>
    $(function () {
      $.validator.setDefaults({
        submitHandler: function () {
          $.ajax({
            type: "POST",
            data: $('#frmLogin').serialize(),
            url: "procesos/usuarios/login/login.php",
            success: function (res) {
              res = res.trim();
              if (res == 1 || res == 2 || res == 3) {
                window.location = "pages/homepage.php";
              } else {
                $("#frmLogin")[0].reset();
                alertify.set('notifier', 'position', 'bottom-left');
                alertify.error('Usuario o clave incorrecta, o Usuario desactivado');
              }
            }
          });
          return false;
        },
      });
      $('#frmLogin').validate({
        rules: {
          usuario: {
            required: true,
            lettersonly: true
          },
          clave: {
            required: true,
            passwordtext: true,
            minlength: 8,
            maxlength: 12
          },

        },
        messages: {
          usuario: {
            required: "Por favor introduzca un usuario",
          },
          clave: {
            required: "Por favor introduzca una contraseña",
            minlength: "Tu contraseña debe ser de 8 carácteres",
            maxlength: "Tu contraseña debe ser de 12 carácteres máximo"
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
      }, "La contraseña solo debe contener números y letras");
    });
  </script>

</body>

</html>
