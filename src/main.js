document.addEventListener('DOMContentLoaded', function() {
    // Carrusel automático y flechas
    const carousel = document.getElementById('autoCarousel');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        let intervalId;

        function showSlide(index) {
            items.forEach((item, i) => {
                item.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }

        intervalId = setInterval(nextSlide, 3000); // 3 segundos

        // Pausar auto-scroll al pasar el mouse
        carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
        carousel.addEventListener('mouseleave', () => intervalId = setInterval(nextSlide, 3000));

        // Flechas de navegación
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        if (prevBtn) {
            prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                prevSlide();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', function (e) {
                e.preventDefault();
                nextSlide();
            });
        }

        // Mostrar primer slide al inicio
        showSlide(currentIndex);
    }
});

