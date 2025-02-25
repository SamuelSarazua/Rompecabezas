function producto(){
    let div_prin = document.createElement('div');
    div_prin.className = "div_prin";

    let img_Pro = document.createElement('img');
    img_Pro.src = "https://eurosuper.vtexassets.com/arquivos/ids/184397/7500810027400.png?v=638524439141800000";
    img_Pro.alt = "Img"
    div_prin.appendChild(img_Pro);

    let titulo = document.createElement('h2');
    titulo.textContent = "Takis Fuego";
    div_prin.appendChild(titulo);

    let precio = document.createElement('h1');
    precio.textContent = "Q 5.00"
    div_prin.appendChild(precio);

}

export { producto }