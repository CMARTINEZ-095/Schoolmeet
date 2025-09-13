// Buscador (función básica)
    function buscarEventos(e) {
        e.preventDefault();
        const input = document.getElementById('mainSearchInput') || document.getElementById('dropdownSearchInput');
        const query = input.value.trim();
        if(query) {
            alert('Buscando: ' + query);
        }
    }