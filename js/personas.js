// Función para abrir/cerrar el menú desplegable
function toggleMenu() {
    let overlay = document.getElementById("menu-overlay");
    let menu = document.getElementById("menu-dropdown");

    if (overlay.classList.contains("show")) {
        overlay.classList.remove("show");
        menu.classList.remove("show");
    } else {
        overlay.classList.add("show");
        menu.classList.add("show");
    }
}

// Función para contactar por WhatsApp
function contactarWhatsApp(numero, nombre) {
    let mensaje = `Hola ${nombre}, quiero hablar contigo.`;  
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Función para cerrar sesión
function cerrarSesion() {
    alert("Sesión cerrada correctamente");
    window.location.href = "index.html";
}

