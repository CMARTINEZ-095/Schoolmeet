// Calendario de eventos
    const eventos = [
        { nombre: 'Torneo de Fútbol', fecha: '2025-06-23', id: 'futbol' },
        { nombre: 'Torneo de Volleyball', fecha: '2025-06-25', id: 'volley' },
        { nombre: 'Nudos Mágicos', fecha: '2025-06-07', id: 'nudos' },
        { nombre: 'Moldeando Emociones', fecha: '2025-05-18', id: 'moldeando' },
        { nombre: 'Coloreando Sueños', fecha: '2025-06-15', id: 'coloreando' }
    ];
    function renderCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = '';
        eventos.forEach(ev => {
            const evDiv = document.createElement('div');
            evDiv.className = 'evento-item';
            evDiv.innerHTML = `<strong>${ev.nombre}</strong> - <span>${ev.fecha}</span> <button onclick="registrarEvento('${ev.id}', '${ev.nombre}')">Registrarse</button>`;
            calendar.appendChild(evDiv);
        });
    }
    window.registrarEvento = function(id, nombre) {
        alert('Te has registrado al evento: ' + nombre);
    }
    renderCalendar();