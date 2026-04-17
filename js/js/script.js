function calcular() {

    let tipo = document.getElementById("tipo").value;

    let C = parseFloat(document.getElementById("capital").value);
    let J = parseFloat(document.getElementById("juros").value);
    let i = parseFloat(document.getElementById("taxa").value) / 100;
    let t = parseFloat(document.getElementById("tempo").value);
    // O parseFloat() é usado para converter as entradas de texto em números de ponto flutuante...

    let resultado = "";

    // MONTANTEJUROS
    if (tipo === "montante") {
        let M = C * Math.pow(1 + i, t);  // usando a bibliteca Math para calcular potência 
        let juros = M - C;

        resultado = `
        Montante: R$ ${M.toFixed(2)}
        Juros: R$ ${juros.toFixed(2)}
        `;
    }

    // CAPITAL
    if (tipo === "capital") {
        let M = C + J;
        let capital = M / Math.pow(1 + i, t);  //pdemos usar o Math.pow() para potências e Math.log() para logaritmos...

        resultado =
         `Capital: R$ ${capital.toFixed(2)}`;
    }

    // TAXA
    if (tipo === "taxa") {
        let M = C + J;
        let taxa = Math.pow(M / C, 1 / t) - 1;

        resultado = 
        `Taxa de Juros: ${(taxa * 100).toFixed(2)} %`;
    }

    // TEMPOO
    if (tipo === "tempo") {
        let M = C + J;
        let tempo = Math.log(M / C) / Math.log(1 + i);

        resultado = 
        `Tempo: ${tempo.toFixed(2)} períodos`;
    }

    document.getElementById("resultado").innerHTML = resultado; //exibição do resultado do progama na div com id "resultado" usando "innerHTML".
}
