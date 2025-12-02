/**
 * Módulo de operaciones matemáticas para el proyecto.
 * @module Operaciones
 */

/**
 * Calcula la suma de dos números.
 *
 * @param {number} a - El primer número a sumar.
 * @param {number} b - El segundo número a sumar.
 * @returns {number} El resultado de la suma.
 * @example
 * const resultado = sumar(5, 10); // Retorna 15
 */
function sumar(a, b) {
    return a + b;
}

/**
 * Calcula el precio final con IVA incluido.
 * 
 * @param {number} precio - El precio base del producto.
 * @param {number} impuesto - El porcentaje de impuesto (ej. 0.21 para 21%).
 * @returns {number} El precio final calculado.
 */
function calcularPrecioConImpuesto(precio, impuesto) {
    return precio * (1 + impuesto);
}

/**
 * Saluda a un usuario del sistema.
 *
 * @param {string} nombre - El nombre del usuario.
 * @returns {string} Un saludo personalizado.
 */
function saludarUsuario(nombre) {
    return `Hola, ${nombre}. Bienvenido al sistema.`;
}

// Exportamos las funciones (para que Node.js no se queje si lo ejecutaras)
module.exports = {
    sumar,
    calcularPrecioConImpuesto,
    saludarUsuario
};