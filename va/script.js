// JavaScript para controlar la imagen de fondo

// Función para obtener el elemento de imagen
function getBackgroundImageElement() {
    return document.querySelector('.image-container img');
}

// Cambia la imagen de fondo al cargar la página
window.onload = function () {
    // Cambia la imagen de fondo (reemplaza imagen.jpg con la ruta de tu imagen)
    const imageUrl = 'a.jpg'; // Reemplaza con la ruta de tu imagen
    const backgroundImageElement = getBackgroundImageElement();
    backgroundImageElement.src = imageUrl;
};
