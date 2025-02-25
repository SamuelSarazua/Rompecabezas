import { header } from "./componentes/header/header.js";

function iniciarDOM(){
    let DOM = document.querySelector("#root");

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let div_header = document.createElement("div");
    div_header.className = "div_header";
    div_header.appendChild(header());
    contenedor.appendChild(div_header);

    DOM.appendChild(contenedor);
}

iniciarDOM();