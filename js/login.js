document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioCorrecto = "andrey";
    const claveCorrecta = "2006";

    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let errorMsg = document.getElementById("error");

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        localStorage.setItem("sesion", "activa");
        window.location.href = "perfil.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
        errorMsg.style.display = "block";
    }
});
