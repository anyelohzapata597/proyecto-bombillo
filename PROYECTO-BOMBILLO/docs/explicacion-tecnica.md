# Explicación técnica (para principiantes)

Este documento explica de forma directa y didáctica cómo funciona el proyecto "PROYECTO-BOMBILLO".

Objetivo:
- Mostrar cómo encender y apagar una bombilla usando solo HTML, CSS y JavaScript.

Archivos clave:
- `index.html`: estructura semántica. Contiene la bombilla (`#bulb`) y dos botones (`#onBtn`, `#offBtn`).
- `styles.css`: estilos basados en claymorfismo (gradientes y sombras) y media queries para que sea responsive.
- `script.js`: lógica del estado y actualizaciones de UI. Incluye JSDoc y comentarios para entender cada función.

Flujo de trabajo (línea por línea, simplificado):
1. El navegador carga `index.html` y `styles.css` para mostrar la interfaz.
2. `script.js` se inicializa al cargar el DOM y registra eventos:
   - `click` en `#onBtn` llama a `turnOn()`.
   - `click` en `#offBtn` llama a `turnOff()`.
   - Atajos de teclado: tecla `E` = encender, `A` = apagar.
3. `turnOn()` y `turnOff()` actualizan `state.isOn` y llaman a `updateUI()`.
4. `updateUI()` aplica o remueve la clase `.on` en `#bulb`, actualiza atributos ARIA (`aria-label`, `aria-pressed`) y el texto del elemento `#status` para lectores de pantalla.

Buenas prácticas demostradas:
- Separación de responsabilidades: HTML (estructura), CSS (presentación) y JS (comportamiento).
- Funciones pequeñas y descriptivas: `turnOn`, `turnOff`, `updateUI`, `init`.
- Accesibilidad: roles ARIA y `aria-live` para anunciar cambios.
- Documentación inline con JSDoc para cada función.

Sugerencias para aprender más:
- Intenta modificar los colores en `styles.css` y observa el efecto.
- Cambia los atajos de teclado en `script.js` y prueba que funcionan.
- Añade pruebas unitarias simples (por ejemplo, con Jest) para `turnOn` y `turnOff` si te interesa testing.

Preguntas frecuentes:
- ¿Por qué usar `aria-live` y `role="status"`? — Para que los lectores de pantalla notifiquen a usuarios con discapacidad visual cuando la bombilla cambia de estado.
- ¿Por qué separar `updateUI()` de `turnOn()`/`turnOff()`? — Facilita pruebas y mantiene la lógica de estado separada de la presentación.

Conclusión: Este proyecto es un buen ejercicio para practicar HTML semántico, CSS moderno (claymorfismo y responsive) y JavaScript limpio con accesibilidad en mente.
