document.querySelector(".login-form").addEventListener("submit", function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificamos si el usuario existe
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        // Usuario y clave coinciden
        alert("Login exitoso");
        event.preventDefault();
        window.location.href = "home.html";
        
    } else {
        // Usuario no existe o clave incorrecta
        alert("Usuario o clave incorrecta");
    }
});


document.querySelector(".register-button").addEventListener("click", function() {
  
    window.location.href = "registro.html";
});