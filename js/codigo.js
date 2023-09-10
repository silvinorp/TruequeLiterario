

// Obtén referencias a elementos HTML
const booksContainer = document.querySelector('.libros');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

// Variables para rastrear el índice actual
let currentIndex = 0;
const maxIndex = document.querySelectorAll('.libros img').length - 1;

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

/*======================================== Tres grupos de libros ============================================ */

let libros = [];
let librosDerecha = [];
let indiceLibroPrincipal = 0;

function inicializarGaleria() {

    // Agrega rutas de imágenes de libros al grupo izquierdo
    libros.push('img/Port1.jpg');
    libros.push('img/Port2.jpg');
    libros.push('img/Port3.jpg');
    libros.push('img/Port4.jpg');
    libros.push('img/Port5.jpg');
    libros.push('img/Port6.jpg');
    libros.push('img/Port7.jpg');
    libros.push('img/Port8.jpg');
    libros.push('img/Port9.jpg');
    libros.push('img/Port10.jpg');
    libros.push('img/Port11.jpg');
    libros.push('img/Port12.jpg');

    const libroIzquierda = document.getElementById('libroIzquierda');
    const libroPrincipal = document.getElementById('libroPrincipal');
    const libroDerecha = document.getElementById('libroDerecha');   

    libroIzquierda.src = libros[indiceLibroPrincipal];   
}

function libroSiguiente() {
    console.log("siguiente ",indiceLibroPrincipal);
    if (indiceLibroPrincipal <= libros.length) {
        indiceLibroPrincipal++;    
        libroDerecha.src = libroPrincipal.src;
        libroPrincipal.src = libroIzquierda.src;
        libroIzquierda.src = libros[indiceLibroPrincipal];
    }    
}

function libroAnterior() {
    console.log("Anterior ",indiceLibroPrincipal);
    if (indiceLibroPrincipal > 0) {
        indiceLibroPrincipal--;
        libroIzquierda.src = libroPrincipal.src;
        libroPrincipal.src = libroDerecha.src;
        libroDerecha.src = libros[indiceLibroPrincipal-2];
    }    
}
// Inicializa la galería cuando se carga la página
window.onload = inicializarGaleria;





/*================================== Cambio del color del fondo según hora del día ==================================*/
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