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
5. Cuestionario de Evaluación
CE	Pregunta	Respuesta
a	Identificación de herramientas	He utilizado JSDoc. Es la herramienta estándar en el ecosistema JavaScript que analiza los comentarios del código fuente para generar un sitio web HTML estático.
b	Documentación de componentes	He utilizado etiquetas estándar como @param (para definir tipo y descripción de argumentos), @returns (para el valor devuelto) y @module. Ver ejemplo en la sección 2 de este documento.
c	Publicación en GitHub Pages	En el workflow uso la acción peaceiris/actions-gh-pages, que copia la carpeta generada (docs_html) a una rama huérfana llamada gh-pages. En Settings > Pages, configuré el repositorio para que publique la web leyendo desde esa rama.
d	Colaboración	GitHub Pages facilita el trabajo en equipo porque centraliza la documentación. Cualquier desarrollador o cliente puede consultar cómo funcionan las funciones sin necesidad de bajarse el código, instalar Node.js o compilar nada en su ordenador.
e	Control de versiones	Mis mensajes de commit son descriptivos e imperativos (ej. "Configurar documentacion automatica", "Mover workflow a la raiz"), lo que permite rastrear cuándo y por qué se implementó la automatización.
f	Accesibilidad y seguridad	Esta configuración permite mantener el código fuente en un repositorio privado (protegiendo la propiedad intelectual) mientras que la documentación en GitHub Pages puede configurarse para ser pública o restringida, separando el "cómo se hace" (código) del "cómo se usa" (docs).
g	Instalación/uso documentados	En la sección 1 de este README explico los comandos exactos (npm run doc) necesarios para quien quiera regenerar la documentación en su propia máquina.
h	CI/CD	El workflow implementa Despliegue Continuo (CD). El evento disparador es push a la rama main. Es continuo porque no requiere aprobación manual: si el código es válido y pasa el proceso, la documentación web se actualiza instantáneamente para reflejar los cambios.