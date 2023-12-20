// Importar electronica.js

import electronica from './electronica.js';

// Resolver script

//Variable que almacena el contenido://

const contenedor = document.getElementById("contenedor-productos");

let contenidoArticulos = "";


electronica.productos.forEach((producto) => {
    contenidoArticulos += `
                        <article class="producto">
                        <figure class="producto__fig">
                        <img src="${producto.imagen}" alt="${producto.nombre}" />
                        </figure>
                        <div class="producto__datos">
                        <h3>Titulo</h3>
                        <div>${producto.precio}</div>
                        </div>
                         </article>
 
                    `;
});

contenedor.innerHTML = contenidoArticulos;