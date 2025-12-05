# UD 1 - P01: CI/CD, Documentación y GitHub Pages

## Descripción
**Actividad:** Documentación Automatizada y Publicación en GitHub Pages.

Este proyecto implementa un sistema de integración y despliegue continuo (CI/CD) para generar documentación técnica de código JavaScript automáticamente. El sistema genera dos formatos: una web navegable (HTML) publicada automáticamente y un archivo Markdown descargable.

---

## 1. Herramientas utilizadas y comandos
Para generar la documentación he utilizado las siguientes herramientas:

*   **Lenguaje:** JavaScript (Node.js).
*   **Generador Web (HTML):** [JSDoc](https://jsdoc.app/).
*   **Generador Extra (Markdown):** [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
*   **Gestor de paquetes:** NPM.

**Instrucciones para generar la documentación localmente:**
1.  Instalar dependencias: `npm install`
2.  Generar web HTML: `npm run doc`
3.  Generar Markdown (opcional): `npx jsdoc2md src/*.js > documentacion.md`

---

## 2. Ejemplo de código documentado
He documentado el código fuente utilizando el estándar **JSDoc**.

**Enlace al archivo fuente:** [src/index.js](./src/index.js)

**Fragmento de código con etiquetas:**
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
3. Enlaces:
    -enlace al repositorio:
        https://github.com/juanfri18/DAW-U1.-Practica001.git
    -enlace a git hub pages
        https://juanfri18.github.io/DAW-U1.-Practica001/
4. Explicación del Workflow:

El archivo de configuración .github/workflows/ci.yml automatiza todo el proceso. Cada vez que hago un push a la rama main, ocurren estos pasos:
Checkout: El robot descarga el código del repositorio.
Setup: Prepara el entorno con Node.js v20.
Install: Ejecuta npm install para bajar las herramientas (jsdoc y jsdoc-to-markdown).
Generación HTML: Ejecuta npm run doc para crear la carpeta docs_html.
Generación Multiformato (Opcional): Ejecuta npx jsdoc2md para crear un archivo Markdown.
Subida de Artefacto: Sube el archivo Markdown generado a la pestaña "Actions" para que pueda ser descargado.
Despliegue (Deploy): La acción peaceiris/actions-gh-pages toma la carpeta HTML y la publica automáticamente en la rama gh-pages.

5. Cuestionario de Evaluación

a	Identificación de herramientas:He utilizado JSDoc. Es la herramienta estándar en el ecosistema JavaScript que analiza los comentarios del código fuente para generar un sitio web HTML estático.
b	Documentación de componentes:He utilizado etiquetas estándar como @param (para definir argumentos), @returns (para el valor devuelto) y @module. Ver ejemplo en la sección 2.
c	Publicación en GitHub Pages: Uso la acción peaceiris/actions-gh-pages, que copia la carpeta generada (docs_html) a una rama huérfana llamada gh-pages. En la configuración del repositorio, activé GitHub Pages apuntando a esa rama.
d	Colaboración:GitHub Pages centraliza la documentación. Cualquier miembro del equipo puede consultar cómo funcionan las funciones actualizadas sin necesidad de descargar el código ni instalar herramientas en su ordenador.
e	Control de versiones:Mis mensajes de commit son descriptivos (ej. "Añadir generación de Markdown opcional"), lo que permite rastrear cuándo se implementaron las mejoras en la automatización.
f	Accesibilidad y seguridad:El código fuente puede mantenerse en un repositorio privado (protegiendo la propiedad intelectual), mientras que la documentación en GitHub Pages puede configurarse para ser accesible a los clientes o usuarios finales.
g	Instalación/uso documentados:En la sección 1 de este README detallo los comandos npm run doc necesarios para generar la documentación en local.
h	CI/CD: El workflow implementa Despliegue Continuo (CD). No requiere aprobación manual: cada cambio válido en el código (push) regenera y actualiza la web de documentación al instante.
i	Multiformato (Opcional)	He generado un segundo formato en Markdown usando la librería jsdoc-to-markdown. Este archivo no se guarda en el repositorio, sino que se genera al vuelo y se puede descargar como un Artefacto (ZIP) desde la pestaña Actions de la ejecución en GitHub.

6. Evidencias de commits:
git log :
PS C:\Users\juanf\Desktop\practica_despliegue_1> git log
commit abab907e2b7395d5c53d47952714c19fce6884e1 (HEAD -> main, origin/main, origin/HEAD)
Author: Juanfri <juanfranciscocort@gmail.com>
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Fri Dec 5 12:12:00 2025 +0100

    Añadir generacion de Markdown opcional

commit 4d7081d4f669f9bda38810743b7bad17942c8896
Author: Juan Francisco Cortejosa Galindo <94106447+juanfri18@users.noreply.github.com>
Date:   Tue Dec 2 13:39:31 2025 +0100

    Delete evaluation questionnaire from README

    Removed evaluation questionnaire section from README.

commit 5147030a4eb27264728a887fb781aeea2564674f
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:31:56 2025 +0100

    actualizo readme

commit 3f67b33c40be75c3c6dd9e8769f239a9b961e91a
Author: Juan Francisco Cortejosa Galindo <94106447+juanfri18@users.noreply.github.com>
Date:   Tue Dec 2 13:16:39 2025 +0100

    Create README.md

commit 03b620939cec0c832dee51e0c14b3d80e941d1c7
Author: Juan Francisco Cortejosa Galindo <94106447+juanfri18@users.noreply.github.com>
Date:   Tue Dec 2 13:13:08 2025 +0100

    Add CI workflow for JS documentation and deployment

commit 6013c309b5a01c18c53c70b572159c4ea2a3edd3
Author: Juan Francisco Cortejosa Galindo <94106447+juanfri18@users.noreply.github.com>
Date:   Tue Dec 2 13:12:17 2025 +0100

    Delete src/ci.yml

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto
~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto

~
(END)

commit 8888a743524a82605399cb05cd2b522db2d812da
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:09:11 2025 +0100

    Restaurar workflow de documentacion

commit 25e6d21e62482727b1b336d57d281940eb765521
Author: Juanfri <juanfranciscocort@gmail.com>
Date:   Tue Dec 2 13:02:21 2025 +0100

    Subida inicial del proyecto


