
// Obtén referencias a elementos HTML
const booksContainer = document.querySelector('.books');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

// Variables para rastrear el índice actual
let currentIndex = 0;
const maxIndex = document.querySelectorAll('.books img').length - 1;

// Eventos de los botones
prevButton.addEventListener('click', showPreviousBook);
nextButton.addEventListener('click', showNextBook);

function showPreviousBook() {
    if (currentIndex > 0) {
        currentIndex--;
        updateBooksPosition();
    }
}

function showNextBook() {
    if (currentIndex < maxIndex) {
        currentIndex++;
        updateBooksPosition();
    }
}

function updateBooksPosition() {
    const translateX = -currentIndex * 210; // 210 es el ancho de la portada más el margen derecho
    booksContainer.style.transform = `translateX(${translateX}px)`;
}


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function cambiarFondo() {
        const ahora = new Date();
        /* const hora = ahora.getHours(); */
        const hora = 6;/* para probar los diferentes casos */

        if (hora >= 6 && hora < 12) {
            // Mañana
            body.style.backgroundColor = "#FFA500";
        } else if (hora < 18) {
            // Tarde
            body.style.backgroundColor = "#FFFF00";
        } else {
            // Noche
            body.style.backgroundColor = "#000080";
        }
    }

    // Llama a la función inicialmente para establecer el fondo
    /* cambiarFondo(); */

    // Actualiza el fondo cada minuto
    /* setInterval(cambiarFondo, 60000); */
});