document.querySelector(".login-form").addEventListener("submit", function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificamos si el usuario existe
    if (localStorage.getItem(username) === null) {
        // Agrega usuario y clave
        

        localStorage.setItem(username, password);
        event.preventDefault();
        alert("Usuario registrado exitosamente");
        // Redirige a la página de login si es necesario
        window.location.href = "inicioSesion.html";
    } else {
        event.preventDefault(); // Previene el envío del formulario
        alert('El usuario ya existe y no se puede volver a registrar.');
        window.location.href = "inicioSesion.html";
    }
});