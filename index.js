import { cargarTablero } from "./components/tablero/tablero.js";
import { crearHeader } from "./components/header/header.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");

    let contenedor = document.createElement("div");
    contenedor.className = "contenedor";

    let div_header = document.createElement("div");
    div_header.className = "div_header";
    div_header.appendChild(crearHeader());
    contenedor.appendChild(div_header);

    let div_progreso = document.createElement("div");
    div_progreso.className = "div_progreso";
    contenedor.appendChild(div_progreso);

    let div_tablero = document.createElement("div");
    div_tablero.className = "div_tablero";
    div_tablero.appendChild(cargarTablero());
    contenedor.appendChild(div_tablero);

    let div_footer = document.createElement("div");
    div_footer.className = "div_footer";
    contenedor.appendChild(div_footer);

    DOM.appendChild(contenedor);

    let cargarLasCartasDOM = document.querySelectorAll(".carta-item");
    cargarLasCartasDOM.forEach(cadaCarta => {
        cadaCarta.addEventListener("click", () => {
            cadaCarta.classList.add("marcado");
        });
    });
}

cargarDOM();
