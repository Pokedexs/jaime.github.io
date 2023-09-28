const fs = require('fs');
const crypto = require('crypto');

// Función para encriptar datos
function encriptarDatos(datos, clave) {
    const cipher = crypto.createCipher('aes-256-cbc', clave);
    let crypted = cipher.update(datos, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

// Dirección IP del visitante (reemplaza con el valor real)
const direccionIP = '127.0.0.1';

// Clave de encriptación (debe mantenerse segura)
const claveEncriptacion = 'tu_clave_de_encriptacion';

// Encriptar la dirección IP
const direccionIPEncriptada = encriptarDatos(direccionIP, claveEncriptacion);

// Guardar la dirección IP en un archivo de texto encriptado
fs.writeFileSync('visitors.txt', direccionIPEncriptada, 'utf-8');

console.log('Dirección IP encriptada y guardada en visitors.txt');