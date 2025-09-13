// Toast para registro de eventos en calendarioeventos.html
window.mostrarToast = function(mensaje, color = '#c423d9', animacion = true) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = mensaje;
    toast.style.display = 'block';
    toast.style.opacity = '1';
    toast.style.background = color;
    if (animacion) {
        toast.style.transform = 'translateX(-50%) scale(1.08)';
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        setTimeout(function() {
            toast.style.transform = 'translateX(-50%) scale(1)';
        }, 100);
    }
    setTimeout(function() {
        toast.style.opacity = '0';
        setTimeout(function(){ toast.style.display = 'none'; }, 400);
    }, 2200);
};
window.registrarAlmanaque = function(nombre) {
    // Color verde para éxito de registro
    window.mostrarToast('Te has registrado al evento: ' + nombre, '#1bc47d', true);
};