 // Mostrar/ocultar la planilla de asistencia
    const toggleBtn = document.getElementById('toggleAsistenciaBtn');
    const panelContainer = document.getElementById('asistenciaPanelContainer');
    let visible = true;
    if (toggleBtn && panelContainer) {
        toggleBtn.addEventListener('click', function() {
            panelContainer.style.display = 'block';
            toggleBtn.style.display = 'none';
        });
    }

     // Funcionalidad para los botones de Confirmar/Anular en la tabla de asistencia
    const table = document.querySelector('.asistencia-table-alt tbody');
    if (table) {
        table.addEventListener('click', function(e) {
            if (e.target.classList.contains('asistencia-btn--confirmar')) {
                // Cambiar estado a Confirmada
                const row = e.target.closest('tr');
                const estado = row.querySelector('.asistencia-estado-alt');
                estado.textContent = 'Confirmada';
                estado.classList.remove('asistencia-estado--pendiente');
                estado.classList.add('asistencia-estado--confirmada');
                // Cambiar botón a Anular
                e.target.textContent = 'Anular';
                e.target.classList.remove('asistencia-btn--confirmar');
                e.target.classList.add('asistencia-btn--anular');
            } else if (e.target.classList.contains('asistencia-btn--anular')) {
                // Cambiar estado a Pendiente
                const row = e.target.closest('tr');
                const estado = row.querySelector('.asistencia-estado-alt');
                estado.textContent = 'Pendiente';
                estado.classList.remove('asistencia-estado--confirmada');
                estado.classList.add('asistencia-estado--pendiente');
                // Cambiar botón a Confirmar
                e.target.textContent = 'Confirmar';
                e.target.classList.remove('asistencia-btn--anular');
                e.target.classList.add('asistencia-btn--confirmar');
            }
        });
    }