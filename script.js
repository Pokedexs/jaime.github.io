// Función para activar o desactivar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Agrega o elimina la clase 'dark-mode'
    // Guarda la preferencia en el almacenamiento local
    const isDarkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
}

// Escucha el clic en el botón de alternancia
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Verificar la preferencia de modo oscuro al cargar la página
window.addEventListener('load', () => {
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});
