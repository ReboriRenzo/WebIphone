import { renderizadoProductos } from "./Funciones.js";
import { catalogo } from "./catalogo.js";

const contenedor = document.getElementById('contenedor'); // Referencia al contenedor donde se mostrarán los productos
renderizadoProductos(contenedor, catalogo.productos)



// const manejadorFiltrar = () => { // Función para manejar el evento de filtro
//     const valorABuscar = textoBusqueda.value.toLowerCase(); // Obtiene y convierte a minúsculas el valor de búsqueda
//     const productosFiltrados = productos.filter((producto) => { // Filtra los productos según el valor de búsqueda
//         return producto.nombre.toLowerCase().includes(valorABuscar); // Verifica si el nombre contiene el texto buscado
//     });
//     renderizarProductos(productosFiltrados); // Muestra solo los productos filtrados
// };

// botonFiltrar.addEventListener('click', manejadorFiltrar); // Asocia el clic en el botón de filtro con la función manejadora
// textoBusqueda.addEventListener('input', manejadorFiltrar); // Activa la función de filtro mientras se escribe
