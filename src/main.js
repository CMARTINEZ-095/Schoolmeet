import { renderNotes } from "./scripts/ui.js";
import { setupEvents } from "./scripts/events.js";
import { initCarousel } from "./scripts/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  renderNotes();   // carga notas
  setupEvents();   // eventos de la app
  initCarousel();  // activa carrusel si existe en la página
});
