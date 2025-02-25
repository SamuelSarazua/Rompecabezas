function header() {
    let header = document.createElement("div");
    header.className = "header";
   
    let logo = document.createElement("img");
    logo.src = "https://seeklogo.com/images/T/takis-logo-15BE596109-seeklogo.com.png";
    logo.alt = "Logo";
    header.appendChild(logo);
   
    let h2 = document.createElement(`h2`);
    h2.textContent = "Productos Marcados";
    header.appendChild(h2);

    let div_Num = document.createElement('div');
    div_Num.className = "div_Num";
    div_Num.innerText = "10";
    header.appendChild(div_Num);


    return header;
}

export { header };