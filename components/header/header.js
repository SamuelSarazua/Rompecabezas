function crearHeader() {
    let header = document.createElement("div");
    header.className = "header";
   
    let logo = document.createElement("img");
    logo.src = "https://www.comco.me/assets/images/comco-comco-mx-comco.me-lalo-comco-cdmx-mexico-diseo-xochimilco-comco.mx-2020.png";
    logo.alt = "Logo";
    header.appendChild(logo);
   
    let h1 = document.createElement(`h1`);
    h1.textContent = "Frutas";
    header.appendChild(h1);

    for (let i = 1; i <= 5; i++) {
        let boton = document.createElement("div");
        boton.className = "boton";
        boton.textContent = "Nivel " + i;
        header.appendChild(boton);
    }

    return header;
}

export { crearHeader };