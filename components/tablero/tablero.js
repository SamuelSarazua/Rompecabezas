import { mezclarCartas } from "./data.js";

function item(contenido){

    let div = document.createElement('div');
    div.className = "carta-item";
    div.innerText = contenido;

    return div;
}

function cargarCartas() {
    
    let div = document.createElement('div');
    div.className = "tablero-div";

    mezclarCartas().forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;

};

export { cargarCartas };