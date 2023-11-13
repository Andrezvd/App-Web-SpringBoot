async function iniciarJuego() {
    try {
        const response = await fetch('http://localhost:8081/api/iniciar', { method: 'POST' });
        const estado = await response.text();
        actualizarEstadoJuego(estado);
    } catch (error) {
        console.error('Error al iniciar el juego:', error);
    }
}

async function intentarAdivinar() {
    const intento = document.getElementById('intento').value;
    try {
        const response = await fetch(`http://localhost:8081/api/adivinar?intento=${intento}`, { method: 'POST' });
        const estado = await response.text();
        actualizarEstadoJuego(estado);
    } catch (error) {
        console.error('Error al intentar adivinar:', error);
    }
}

async function actualizarEstadoJuego(estado) {
    document.getElementById('estadoJuego').innerText = estado;

    // Si el juego ha terminado, puedes hacer otras acciones aquí, como deshabilitar el input de intento.
    // Por ejemplo:
    if (estado.includes("terminado")) {
        document.getElementById('intento').disabled = false;
    }
}
