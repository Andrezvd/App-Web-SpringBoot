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

async function agregarMateria() {
    try {
        const nombre = document.getElementById('materia').value;
        const ponderacion = document.getElementById('ponderacion').value;

        // Realizar una solicitud POST al backend para agregar la materia
        const response = await fetch('http://localhost:8081/api/agregar-materia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, ponderacion }),
        });

        // Después de agregar la materia, actualizar la tabla mostrando todas las materias
        obtenerYMostrarMaterias();
    } catch (error) {
        console.error('Error al agregar materia:', error);
    }
}

async function obtenerYMostrarMaterias() {
    try {
        // Realizar una solicitud GET al backend para obtener las materias
        const response = await fetch('http://localhost:8081/api/obtener-materias');
        const materias = await response.json();

        // Limpiar el cuerpo de la tabla
        document.getElementById('cuerpoTabla').innerHTML = '';

        // Iterar sobre las materias y agregarlas a la tabla
        materias.forEach(materia => {
            const fila = document.createElement('tr');
            const celdaNombre = document.createElement('td');
            const celdaPonderacion = document.createElement('td');

            celdaNombre.textContent = materia.nombre;
            celdaPonderacion.textContent = materia.ponderacion;

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaPonderacion);

            document.getElementById('cuerpoTabla').appendChild(fila);
        });
    } catch (error) {
        console.error('Error al obtener materias:', error);
    }
}

