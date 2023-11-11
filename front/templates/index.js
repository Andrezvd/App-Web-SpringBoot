async function obtenerSaludo() {
    try {
        const response = await fetch('http://localhost:8081/api/saludo', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.text();
        document.getElementById('resultado').innerText = data;
    } catch (error) {
        console.error('Error al obtener el saludo:', error);
    }
}
