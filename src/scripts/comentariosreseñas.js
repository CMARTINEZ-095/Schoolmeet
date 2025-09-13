// Interacción de estrellas y envío de comentario para reseñas
const stars = document.querySelectorAll('.review-stars-input .star');
let rating = 0;
if (stars.length > 0) {
    stars.forEach(star => {
        star.addEventListener('mouseenter', function() {
            const val = parseInt(this.getAttribute('data-value'));
            stars.forEach((s, i) => s.classList.toggle('active', i < val));
        });
        star.addEventListener('mouseleave', function() {
            stars.forEach((s, i) => s.classList.toggle('active', i < rating));
        });
        star.addEventListener('click', function() {
            rating = parseInt(this.getAttribute('data-value'));
            stars.forEach((s, i) => s.classList.toggle('active', i < rating));
        });
    });
    var reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const comment = document.getElementById('reviewComment').value.trim();
            const msg = document.getElementById('reviewFormMsg');
            if (rating === 0) {
                msg.textContent = 'Por favor selecciona una calificación.';
                msg.style.color = '#c423d9';
                return;
            }
            if (comment.length < 5) {
                msg.textContent = 'El comentario es muy corto.';
                msg.style.color = '#c423d9';
                return;
            }
            msg.textContent = '¡Gracias por tu reseña!';
            msg.style.color = '#1bc47d';
            this.reset();
            stars.forEach(s => s.classList.remove('active'));
            rating = 0;
        });
    }
}
