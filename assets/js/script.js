// script.js

// Esta función se llamará al finalizar la compra
function finalizarCompraPorWhatsApp() {
    // Obtener los elementos de la tabla del carrito
    const filas = document.querySelectorAll('.table-body-row');

    // Construir el mensaje de WhatsApp con los detalles del carrito
    let mensaje = '¡Hola! Quiero finalizar mi compra. Aquí están los detalles:\n\n';

    filas.forEach((fila, index) => {
        const nombre = fila.querySelector('.product-name').textContent;
        const precio = fila.querySelector('.product-price').textContent;
        const cantidad = fila.querySelector('.product-quantity input').value;

        mensaje += `${index + 1}. ${nombre} - Precio: ${precio} - Cantidad: ${cantidad}\n`;
    });

    // Número de WhatsApp al que se enviará el mensaje
    const numeroWhatsApp = '123456789';  // Reemplaza con tu número de WhatsApp

    // Redirigir a WhatsApp
    window.location.href = `https://wa.me/${3464553537}?text=${encodeURIComponent(mensaje)}`;
}
// Variables para el carrito
let cart = [];
let cartCount = 0;

// Función para añadir al carrito
function addToCart(productId) {
    // Agregar el producto al carrito
    cart.push(productId);

    // Actualizar la cantidad en el carrito
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Función para cambiar de página
function changePage(pageNumber) {
    // Aquí puedes implementar la lógica para cambiar de página
    // Puedes cargar productos adicionales o cambiar la visibilidad de los existentes.
    console.log(`Cambiando a la página ${pageNumber}`);
}
