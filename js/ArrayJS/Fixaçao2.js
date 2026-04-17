const botao = document.getElementById('criarbotao');

botao.addEventListener('click', function() {
    // Faz o botão desaparecer
    botao.style.display = 'none';

    // Cria uma nova div dinamicamente
    const novaDiv = document.createElement('div')

    // Adiciona conteúdo dentro da nova div
    novaDiv.innerHTML = `
        <h1>criado pelo JavaScript</h1>
        <p>Este conteudo foi gerado com JavaScript.</p>
        <p> esta div foi criada no lugar.</p>
    `

    // Aplica estilo direto à nova div
    novaDiv.style.textAlign = 'center'
    novaDiv.style.backgroundColor = 'lightblue'
    novaDiv.style.padding = '30px'
    novaDiv.style.borderRadius = '15px'
    novaDiv.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';

    // Adiciona a nova div no corpo da página
    document.body.appendChild(novaDiv)
});

