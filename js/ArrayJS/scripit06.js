const container = document.getElementById("container")

//  título
const titulo = document.createElement("h2");
titulo.textContent = "Exemplo: Location, Screen, Open, Close"
container.appendChild(titulo);

// Location
const btnLocation = document.createElement("button")
btnLocation.textContent = "Mostrar URL (location)"
btnLocation.onclick = () => {
    alert("URL atual: " + location.href)
}
container.appendChild(btnLocation)

// CScreen
const btnScreen = document.createElement("button")
btnScreen.textContent = "Mostrar resolução (screen)"
btnScreen.onclick = () => {
    alert("Resolução da tela: " + screen.width + "x" + screen.height)
}
container.appendChild(btnScreen);

// openn
let novaJanela

const btnOpen = document.createElement("button")
btnOpen.textContent = "Abrir nova janela"
btnOpen.onclick = () => {
    novaJanela = window.open("", "nova", "width=300,height=200")
    novaJanela.document.write("<h3>Janela aberta!</h3>")
};
container.appendChild(btnOpen);

// close
const btnClose = document.createElement("button")
btnClose.textContent = "Fechar nova janela"
btnClose.onclick = () => {
    if (novaJanela) {
        novaJanela.close()
    } else {
        alert("Nenhuma janela aberta.")
    }
};
container.appendChild(btnClose);
