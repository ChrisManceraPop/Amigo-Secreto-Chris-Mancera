let amigos = [];

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }

    let amigosDisponibles = [...amigos];
    let resultado = [];

    for (let i = 0; i < amigos.length; i++) {
        let indiceAleatorio;
        do {
            indiceAleatorio = Math.floor(Math.random() * amigosDisponibles.length);
        } while (amigosDisponibles[indiceAleatorio] === amigos[i]);

        resultado.push({
            amigo: amigos[i],
            amigoSecreto: amigosDisponibles[indiceAleatorio]
        });

        amigosDisponibles.splice(indiceAleatorio, 1);
    }

    mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';

    resultado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.amigo} → ${item.amigoSecreto}`;
        listaResultado.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.className = 'amigo-item';
        
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigos[i];
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.onclick = () => eliminarAmigo(i);
        
        li.appendChild(nombreSpan);
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    }
}

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = '';
    mostrarListaAmigos();
} 