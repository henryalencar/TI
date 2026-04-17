

function Events() {

    const handleMyEvent = (e) => {
        console.log(e); // Evento
        console.log("EVENTO 1 ATIVADO");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h2>RENDERIZANDO TRUE</h2>;
        } else {
            return <h2>RENDERIZANDO FALSE</h2>;
        }
    };

    const handleEvent3 = () => {
        alert("EVENTO 3 ATIVADO ");
    };

    //EVENTO 4 (SOMA)
    const handleEvent4 = () => {
        const n1 = Number(prompt("Digite o primeiro nuúmero:"));
        const n2 = Number(prompt("Digite o segundo nuúmero:"));

        const soma = n1 + n2;

        alert("Resultado: " + soma);
    };

    return (
        <div>

            <div>
                <button onClick={handleMyEvent}>
                    Função Maior com Nome
                </button>
            </div>

            <div>
                <button onClick={() => console.log("EVENTO 2 ATIVADOO")}>
                    Função Menor sem Nome
                </button>
            </div>

            <div>
                <button onClick={handleEvent3}>
                    Evento 3
                </button>
            </div>

            {/* SOMAAA*/}
            <div>
                <button onClick={handleEvent4}>
                    Somar Valores
                </button>
            </div>

            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>

        </div>
    );
}

export default Events;