# UD 1 - P01: CI/CD, Documentación y GitHub Pages

## Descripción
**Actividad:** Documentación Automatizada y Publicación en GitHub Pages.
Este proyecto implementa un sistema de integración y despliegue continuo (CI/CD) para generar documentación técnica de código JavaScript automáticamente y publicarla en una web accesible.

---

## 1. Herramientas utilizadas y comandos
Para generar la documentación HTML he utilizado las siguientes herramientas:

*   **Lenguaje:** JavaScript (Node.js).
*   **Generador:** [JSDoc](https://jsdoc.app/) (Estándar para documentación JS).
*   **Gestor de paquetes:** NPM.
*   **Comandos para generar localmente:**
    1.  `npm install` (Instala dependencias).
    2.  `npm run doc` (Ejecuta el script configurado: `jsdoc src/ -d docs_html`).

---

## 2. Ejemplo de código documentado
He documentado el código fuente utilizando el estándar **JSDoc**.

**Enlace al archivo fuente:** [src/index.js](./src/index.js)

**Fragmento de código:**
```javascript
/**
 * Calcula la suma de dos números.
 *
 * @param {number} a - El primer número a sumar.
 * @param {number} b - El segundo número a sumar.
 * @returns {number} El resultado de la suma.
 */
function sumar(a, b) {
    return a + b;
}
