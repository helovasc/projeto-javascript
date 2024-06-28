const cores = [
    "#FF0000", "#FF7F00", "#FFFF00", "#7FFF00", "#00FF00", "#00FF7F",
    "#00FFFF", "#007FFF", "#0000FF", "#7F00FF", "#FF00FF", "#FF007F"
];

document.addEventListener("DOMContentLoaded", () => {
    const paleta = document.getElementById('paleta');
    cores.forEach(cor => {
        const div = document.createElement('div');
        div.className = 'cor';
        div.style.backgroundColor = cor;
        div.dataset.cor = cor;
        div.addEventListener('click', () => mostrarHarmonias(cor));
        paleta.appendChild(div);
    });

    document.getElementById('harmonia').addEventListener('change', atualizarCores);
});

function atualizarCores() {
    document.getElementById('resultados').style.display = 'none';
}

function mostrarHarmonias(corEscolhida) {
    const tipoHarmonia = document.getElementById('harmonia').value;
    if (!tipoHarmonia) {
        alert("Por favor, selecione um tipo de harmonia.");
        return;
    }

    const harmonias = calcularHarmonias(corEscolhida, tipoHarmonia);
    const container = document.getElementById('cores-harmoniosas');
    container.innerHTML = ''; // Limpar cores anteriores

    harmonias.forEach(cor => {
        const div = document.createElement('div');
        div.className = 'cor';
        div.style.backgroundColor = cor;
        container.appendChild(div);
    });

    document.getElementById('resultados').style.display = 'block';
}

function calcularHarmonias(cor, tipoHarmonia) {
    const indice = cores.indexOf(cor);
    let harmonias = [];

    switch (tipoHarmonia) {
        case 'analogica':
            harmonias = [
                cores[(indice + 1) % cores.length],
                cores[(indice + 11) % cores.length]
            ];
            break;
        case 'complementar':
            harmonias = [
                cores[(indice + 6) % cores.length]
            ];
            break;
        case 'triade':
            harmonias = [
                cores[(indice + 4) % cores.length],
                cores[(indice + 8) % cores.length]
            ];
            break;
        default:
            break;
    }

    return harmonias;
}
