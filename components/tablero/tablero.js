import { mezclarCartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta-item";

    // Crear la cara frontal (oculta el contenido)
    let frente = document.createElement('div');
    frente.className = "cara frente";
    frente.innerText = "?"; // Puedes cambiar esto por una imagen si lo deseas

    // Crear la cara trasera (muestra la fruta cuando se voltea)
    let atras = document.createElement('div');
    atras.className = "cara atras";
    atras.innerText = contenido;

    // Agregar las caras al div principal de la carta
    div.appendChild(frente);
    div.appendChild(atras);

    // Evento para voltear la carta
    div.addEventListener("click", () => {
        div.classList.toggle("volteada");
    });

    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "tablero-div";

    mezclarCartas().forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargarCartas };
