# Guía Próspera del Proyecto OverPower

Bienvenido a la sala de máquinas del compendio Zen **OverPower**. Este documento es tu manual definitivo para gobernar el proyecto, crear nuevos capítulos y entender cómo la escritura se convierte mágicamente en una aplicación web moderna.

---

## 1. Arquitectura del Proyecto (Carpetas)

Para mantener todo ordenado y listo para alojarse en plataformas profesionales como **Vercel**, hemos estructurado el proyecto de la siguiente manera:

- 📂 **`/content`**: Aquí vive la "carne" del proyecto. Todos tus archivos Markdown (los borradores y los capítulos oficiales, del `01_` al `68_...`).
- 📂 **`/web`**: El "Frontend". Es la aplicación web que leerán tus usuarios. Contiene los HTML, el CSS (estilos) y el JS (lógica). **Esta es la carpeta que conectaremos a Vercel.**
- 📂 **`/docs`**: Documentación adicional, auditorías antiguas y apuntes de base.
- 📄 **`build_web_data.py`**: El "Puente". El motor de automatización.
- 📄 **`README.md`** y **`Guia_Prospera_OverPower.md`**: Tus mapas del tesoro.

---

## 2. Flujo de Trabajo (Cómo crear un capítulo nuevo)

El proceso para añadir un nuevo caso del Mumonkan o cualquier otro texto es sencillo y lineal:

1. **Crea el Archivo Markdown:**
   Ve a la carpeta `/content` y crea tu nuevo texto siguiendo la nomenclatura oficial, por ejemplo: `69_Capitulo_Mumonkan_Caso_49.md`.
2. **Usa la Plantilla:**
   Asegúrate de copiar los metadatos y respetar rigurosamente la estructura de 8 secciones (H2) tal como dicta la Generación 2.
3. **Ejecuta el Motor de Automatización:**
   Abre una terminal o pide a tu asistente que ejecute el siguiente comando en la raíz del proyecto:
   ```bash
   python build_web_data.py
   ```
   *¿Qué hace esto?* El script leerá la carpeta `/content`, analizará tu nuevo texto, extraerá su título, analogías, preguntas y vocabulario, y los empaquetará dentro de `web/js/data.js`. La web se actualizará al instante.

---

## 3. Despliegue en Vercel (Ponerlo en Internet)

Vercel es gratuito para proyectos estáticos como este y no tiene límite de alojamiento para el tamaño que estamos manejando (tu web apenas pesa unos megabytes, Vercel soporta gigabytes). 

**Pasos para desplegar:**
1. Inicia sesión en [Vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"** y selecciona tu repositorio `DonBorgiFR/Overpower`.
3. ⚠️ **MUY IMPORTANTE**: En el apartado de configuración (Build and Output Settings), busca la opción **"Root Directory"** y selecciona `web`. 
   *(Esto le dice a Vercel que ignore tus apuntes Markdown y aloje únicamente la página web final).*
4. Haz clic en **"Deploy"**. En 30 segundos, tendrás un enlace público (ej. `overpower-zen.vercel.app`) para compartir con el mundo.

> Cada vez que hagas `git push` a tu repositorio, Vercel se actualizará solo.

---

## 4. Control de Versiones (Tu red de seguridad)

Nunca perderás el trabajo si sigues este ritual al terminar tu jornada:

1. **Añadir cambios:** `git add .` (Prepara todos los archivos modificados).
2. **Sellar el guardado:** `git commit -m "Añadido el capítulo 69"` (Pon un mensaje descriptivo).
3. **Subir a la nube:** `git push origin main` (Envía el trabajo a GitHub y activa Vercel).
