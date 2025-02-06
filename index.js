import { cargarCartas } from "./components/tablero/tablero.js";


let DOM = document.querySelector("#root");

let contenedor = document.createElement(`div`);
contenedor.className = "contenedor";

let div_header = document.createElement(`div`);
div_header.className = "div_header";
contenedor.appendChild(div_header);

let div_progreso = document.createElement(`div`);
div_progreso.className = "div_progreso";
contenedor.appendChild(div_progreso);

let div_tablero = document.createElement(`div`);
div_tablero.className = "div_tablero";
contenedor.appendChild(div_tablero);
div_tablero.appendChild(cargarCartas());

let div_footer = document.createElement(`div`);
div_footer.className = "div_footer";
contenedor.appendChild(div_footer);

DOM.appendChild(contenedor);