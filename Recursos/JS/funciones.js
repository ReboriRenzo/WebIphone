export function renderizadoProductos(contenedor, productos) {
    contenedor.innerHTML = "";
    productos.forEach(element => {
        const producto = `
        <article class="catalogo__producto">
                <div>
                    <img src="${element.imagen}" alt="${element.nombre}"/>
                    <h3>${element.nombre}</h3>
                </div>
                <data value="precio" type="number">${element.Precio}</data>
            </article>
    `
    contenedor.innerHTML += producto
    });
}