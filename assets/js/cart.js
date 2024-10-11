
    var carrito = [];

    function agregarAlCarrito(producto) {
        var productoExistente = carrito.find(function (item) {
            return item.id === producto.id;
        });

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push({ id: producto.id, nombre: producto.nombre, cantidad: 1 });
        }

        renderizarCarrito();
    }

    function removerDelCarrito(productoId) {
        carrito = carrito.filter(function (item) {
            return item.id !== productoId;
        });

        renderizarCarrito();
    }

    function renderizarCarrito() {
        var carritoContainer = document.getElementById('cart-items');
        var carritoSummary = document.getElementById('cart-summary');

        carritoContainer.innerHTML = '';
        carritoSummary.innerHTML = '';

        carrito.forEach(function (producto) {
            var fila = document.createElement('tr');
            fila.innerHTML = `
                <td class="product-remove">
                    <button onclick="removerDelCarrito(${producto.id})"><i class="far fa-window-close"></i></button>
                </td>
                <td class="product-image"><img src="assets/img/products/product-img-${producto.id}.jpg" alt=""></td>
                <td class="product-name">${producto.nombre}</td>
                <td class="product-quantity">${producto.cantidad}</td>
                <td class="product-total">${producto.cantidad}</td>
            `;

            carritoContainer.appendChild(fila);
            agregarFilaResumen(producto, carritoSummary);
        });
    }

    function agregarFilaResumen(producto, container) {
        var row = document.createElement('tr');
        var productCell = document.createElement('td');
        productCell.textContent = producto.nombre;
        row.appendChild(productCell);
        var quantityCell = document.createElement('td');
        quantityCell.textContent = producto.cantidad;
        row.appendChild(quantityCell);
        container.appendChild(row);
    }

    function finalizarCompraPorWhatsApp() {
        console.log('Compra finalizada por WhatsApp:', carrito);
    }

    var productos = [
        { id: 1, nombre: 'Strawberry' },
        { id: 2, nombre: 'Berry' },
        { id: 3, nombre: 'Lemon' }
        // Agrega más productos según sea necesario
    ];

    // Evento de prueba para agregar productos desde la tienda
    document.getElementById('cart-button').addEventListener('click', function () {
        agregarAlCarrito(productos[0]);
    });

    renderizarCarrito();

