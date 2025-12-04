function verificar() {
  const ano = Number(document.getElementById("ano").value);
  const generoInput = document.querySelector('input[name="genero"]:checked');
  const res = document.getElementById("resultado");
  const anoAtual = new Date().getFullYear();

  // Esconde todas as imagens
  document.querySelectorAll("img").forEach(img => img.style.display = "none");

  if (ano < 1900 || ano > 2025 || !generoInput) {
    res.textContent = "Digite um ano válido (1900 a 2025) e selecione o gênero.";
    return;
  }

  const genero = generoInput.value;
  const idade = anoAtual - ano;
  let idImagem = "";
  let texto = "";

  if (genero === "M") {
    if (idade < 2) { idImagem = "bebeM"; texto = "Bebê masculino"; }
    else if (idade < 12) { idImagem = "criancaM"; texto = "Criança masculina"; }
    else if (idade < 18) { idImagem = "adoM"; texto = "Adolescente masculino"; }
    else if (idade < 60) { idImagem = "adulto"; texto = "Adulto"; }
    else { idImagem = "idoso"; texto = "Idoso"; }
  } else {
    if (idade < 2) { idImagem = "bebeF"; texto = "Bebê feminino"; }
    else if (idade < 12) { idImagem = "criancaF"; texto = "Criança feminina"; }
    else if (idade < 18) { idImagem = "adoF"; texto = "Adolescente feminina"; }
    else if (idade < 60) { idImagem = "adulta"; texto = "Adulta"; }
    else { idImagem = "idosa"; texto = "Idosa"; }
  }

  res.textContent = `Você tem ${idade} anos — ${texto}.`;
  document.getElementById(idImagem).style.display = "block";
}

  