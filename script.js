function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

function abrirModal(nombre, precio, imagen, descripcion) {
    document.getElementById('modalTitulo').innerText = nombre;
    document.getElementById('modalPrecio').innerText = "$" + precio;
    document.getElementById('modalImagen').src = imagen;
    document.getElementById('modalDescripcion').innerText = descripcion;

    // CAMBIA ESTE NÚMERO
    let numeroWhatsapp = "593999999999"; 
    let mensaje = "¡Hola! Me interesa pedir: " + nombre + " ($" + precio + ")";
    
    let enlaceFinal = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(mensaje);
    
    document.getElementById('botonWhatsapp').href = enlaceFinal;
    document.getElementById('modalProducto').classList.add('modal-activo');
}

function cerrarModal() {
    document.getElementById('modalProducto').classList.remove('modal-activo');
}