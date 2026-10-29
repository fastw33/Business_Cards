# React + Vite

## Directorio Fastway

Ruta principal: `/asesores-fastway`. También admite `/fastway` y `/asesorias-fastway`.
Cada contacto tiene un enlace directo: `?perfil=gina`, `?perfil=karen`, `?perfil=felipe`
o `?perfil=mauricio`.

Directorio compacto para el QR de una tarjeta física, siguiendo la composición de Greenway:
apertura de puertas, Gina como CEO y tarjetas de Karen, Felipe y Mauricio con WhatsApp, correo
y llamada directos. La web, clientes y academia aparecen como enlaces discretos al pie.
Los datos y enlaces se editan en `src/pages/fastway.data.js`; el diseño está aislado
en `src/pages/Fastway.jsx` y `src/pages/fastway.css`.

Ejecutar con `npm run dev`; compilar con `npm run build`. La compilación genera
`fastway.html` con metadatos propios. Vercel y los hosts compatibles con `_redirects`
sirven esa entrada para las rutas Fastway. Los recursos visuales provienen de los
proyectos Fastway compartidos; las imágenes de Gina, Karen y el logo están optimizadas
en WebP. La fuente Manrope se sirve localmente con su licencia.

La entrada se puede omitir y respeta la preferencia de movimiento reducido del sistema.
Harvest y Green Way conservan sus rutas y diseños existentes.

### Brochures y catálogos

Agrega uno o varios archivos `.pdf` en `src/assets/fastway-brochures/`. El directorio
los descubre automáticamente durante el desarrollo y al compilar; después hay que
publicar la nueva compilación. No requiere una pantalla de administración.
Para mostrar una portada, agrega una imagen `.png`, `.jpg` o `.webp` con el mismo
nombre base del PDF. Los títulos y datos opcionales se pueden personalizar en
`src/pages/fastway.brochures.js`. Cada documento permite abrirlo o descargarlo.
El catálogo inicial es `catalogo-fastway.pdf`; se puede reemplazar conservando su nombre.
Si cambia su número de páginas o tamaño, actualiza el campo `info` en ese archivo.

Las animaciones de las tarjetas se pueden pausar desde el pie del directorio.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
