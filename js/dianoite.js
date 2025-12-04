const horaInput = document.getElementById("hora");
const minutoInput = document.getElementById("minuto");
const msg = document.getElementById("resultado");

const imgDia = document.getElementById("imgDia");
const imgTarde = document.getElementById("imgTarde");
const imgNoite = document.getElementById("imgNoite");

function atualizarImagem() { //quando atualiza
  const hora = Number(horaInput.value);
  const minuto = Number(minutoInput.value);

  if (isNaN(hora) || hora < 0 || hora > 23) {
    msg.textContent = " Digite uma hora válida (0–23)";
    document.body.style.backgroundColor = "#f0f0f0";
    imgDia.style.display = "none";
    imgTarde.style.display = "none";
    imgNoite.style.display = "none";
    return;
  }
  //
  imgDia.style.display = "none";
  imgTarde.style.display = "none";
  imgNoite.style.display = "none";

  if (hora >= 6 && hora < 12) {
    msg.textContent = ` São ${hora}:${minuto.toString().padStart(2, "0")} Bom dia!`;
    imgDia.style.display = "block";
    document.body.style.backgroundColor = "#ddcf4cff";
  } else if (hora >= 12 && hora < 18) {
    msg.textContent = ` São ${hora}:${minuto.toString().padStart(2, "0")} oa tarde!`;
    imgTarde.style.display = "block";
    document.body.style.backgroundColor = "#f09103ff";
  } else {
    msg.textContent = ` São ${hora}:${minuto.toString().padStart(2, "0")}  Boa noite!`;
    imgNoite.style.display = "block";
    document.body.style.backgroundColor = "#2C3E50";
  }
}

horaInput.addEventListener("input", atualizarImagem);  //muda as imagens de acrodo com a hora...
minutoInput.addEventListener("input", atualizarImagem);

//img.src = "https://i.imgur.com/zYIlgBl.jpg" LINK PRA IMAGEM JS.
