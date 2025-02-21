function crearCarta(contenido) {
    let div = document.createElement('div');
    div.className = "carta-item";

    let frente = document.createElement('div');
    frente.className = "cara frente";
    frente.innerHTML = "👻"; 

    let atras = document.createElement('div');
    atras.className = "cara atras";
    atras.innerText = contenido;

    div.appendChild(frente);
    div.appendChild(atras);

    // Evento para voltear la carta
    div.addEventListener("click", () => {
        div.classList.toggle("volteada");
    });

    return div;
}

export { crearCarta };