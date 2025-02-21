import { barajarCartas, cargarCartas } from "./funcionesCartas.js";
import { cartas } from "./data.js";

// Función para mezclar las cartas
function mezclarCartas() {
    let todas_las_cartas = cartas.concat(cartas); // Aquí se duplica el listado de cartas
    
    return barajarCartas(todas_las_cartas); // Aqui se barajea las cartas cada vez q se reinicie la pagina
}

// Función para cargar las cartas en el tablero
function cargarTablero() {
    let cartasMezcladas = mezclarCartas(); // Se usa la funcion de mezclar las cartas de funcionesCartas.js

    return cargarCartas(cartasMezcladas);
}

export { cargarTablero };