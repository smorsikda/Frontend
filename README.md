# Presentación digital — Miguel Correa

Página personal para la actividad de Diseño de sistemas en Internet. El contenido de la presentación está escrito directamente en `index.html`, usando HTML semántico y una hoja de estilos externa.

## Ejecutar en tu computadora

Necesitas Node.js. Abre una terminal en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre la dirección local indicada por Vite, normalmente `http://localhost:5173`. Para generar los archivos listos para publicar, ejecuta `npm run build`; aparecerán en `dist/`.

## Estructura HTML de la actividad

- `index.html` contiene `<!doctype html>`, `<html>`, `<head>` y `<body>`.
- `<h1>` presenta el nombre; `<h2>` marca las secciones; `<h3>` identifica intereses y enlaces.
- `<p>` contiene la presentación personal y descripciones.
- `<ul>` y `<li>` organizan los intereses y enlaces.
- `src/styles.css` define el diseño y la paleta inspirada en League of Legends.
- `src/site.js` permite alternar entre tema oscuro y claro.
- `public/miguel-profile.png` contiene la imagen usada en la presentación.

Los niveles `<h4>`, `<h5>` y `<h6>` se usan cuando el contenido necesita subtítulos más profundos. Esta presentación mantiene una jerarquía breve hasta `<h3>`.

## Enlaces

- GitHub: https://github.com/smorsikda
- Descarga oficial de League of Legends: https://www.leagueoflegends.com/es-mx/download/
- Repositorio de la tarea: https://github.com/smorsikda/Frontend

## Publicar en GitHub Pages

El repositorio incluye un flujo de GitHub Actions. En GitHub abre **Settings → Pages** y selecciona **GitHub Actions** como fuente. Después de subir cambios a `main`, revisa la pestaña **Actions** para confirmar que la publicación terminó.
