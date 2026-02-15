function toggleMenu () {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

// --- FUNCIÓN PARA ABRIR LA TARJETA DEL PRODUCTO ---
function abrirModal(nombre, precio, imagen, descripcion) {
    // Llenamos la tarjeta oculta con los datos del producto al que se le dio clic
    document.getElementById('modalTitulo').innerText = nombre;
    document.getElementById('modalPrecio').innerText = "$" + precio;
    document.getElementById('modalImagen').src = imagen;
    document.getElementById('modalDescripcion').innerText = descripcion;

    // MAGIA DE WHATSAPP:
    // CAMBIA ESTE NÚMERO por el tuyo para probar (Usa 593 y tu número sin el 0)
    let numeroWhatsapp = "593999999999"; 
    
    // Armamos el mensaje automático
    let mensaje = "¡Hola! Me interesa pedir: " + nombre + " ($" + precio + ")";
    
    // Convertimos el mensaje a formato de enlace de internet
    let enlaceFinal = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensaje);
    
    // Se lo pegamos al botón verde
    document.getElementById('botonWhatsapp').href = enlaceFinal;

    // Mostramos la tarjeta en pantalla
    document.getElementById('modalProducto').classList.add('modal-activo');
}

// --- FUNCIÓN PARA CERRAR LA TARJETA ---
function cerrarModal() {
    document.getElementById('modalProducto').classList.remove('modal-activo');
}