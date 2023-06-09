document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtén los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Configuracion de  datos para el envío de correo
    var data = {
      to: 'andresrecio82@gmail.com', 
      from: email,
      subject: 'Nuevo mensaje de contacto',
      text: 'Nombre: ' + name + '\nCorreo electrónico: ' + email + '\nMensaje: ' + message
    };
  
    // Envía el correo electrónico utilizando la API de SendGrid
    sendGrid.send(data)
      .then(function() {
        alert("Correo enviado correctamente");
      })
      .catch(function(error) {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el correo");
      });
  });
  