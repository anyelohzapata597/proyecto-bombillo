# PROYECTO-BOMBILLO — Documentación principal

## Resumen
Proyecto educativo que muestra cómo encender y apagar una bombilla usando solo HTML, CSS y JavaScript. Diseño con claymorfismo, responsive y accesible.

## Contenido del repositorio
- `index.html` — Interfaz principal (botones y bombilla).
- `styles.css` — Estilos y diseño responsivo.
- `script.js` — Lógica de control y JSDoc.
- `docs/arquitectura.md` — Explicación técnica de la arquitectura.
- `docs/requerimientos.md` — Requerimientos y cómo se cumplen.
- `docs/plan-de-implementacion.md` — Pasos seguidos y tareas futuras.

## Regla de mantenimiento
**Este archivo (`docs/readme.md`) debe mantenerse actualizado**: cada cambio, mejora o corrección en el proyecto debe reflejarse aquí con fecha y descripción breve. Esto incluye modificaciones en UI, lógica, estilos o documentación.

Formato recomendado para actualizaciones:

- YYYY-MM-DD — Descripción corta del cambio — Autor

Ejemplo:
- 2026-02-12 — Implementación inicial del demo y documentación básica — Equipo

## Instrucciones rápidas para ejecutar
Abrir `index.html` en cualquier navegador moderno. No requiere servidor.

Para abrir rápidamente desde Windows, ejecutar `serve.bat` (abre `index.html` en el navegador predeterminado):

```powershell
.\serve.bat
```

Si prefieres levantar un servidor estático (útil para testing de CORS o fetch):

- Con Python (si está instalado):

```powershell
python -m http.server 8000
```

- Con Node (si está instalado):

```powershell
npx http-server -p 8000
```

## Notas para desarrolladores principiantes
- Leer `docs/arquitectura.md` para entender la separación de responsabilidades.
- Revisar `script.js` para ver ejemplos de JSDoc y funciones pequeñas.

---
Para dudas o mejoras, documentar la propuesta aquí y luego implementarla en el código.