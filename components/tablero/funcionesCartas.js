import { crearCarta } from "./itemCarta.js";

function barajarCartas(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
    return cartas;
}

function cargarCartas(cartas) {
    let div = document.createElement('div');
    div.className = "tablero-div";

    cartas.forEach((letra) => {
        div.appendChild(crearCarta(letra));
    });

    return div;
}

export { barajarCartas, cargarCartas };