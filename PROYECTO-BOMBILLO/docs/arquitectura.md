# Arquitectura del Proyecto

Este proyecto es una demostración sencilla para encender y apagar una bombilla usando solo HTML, CSS y JavaScript.

Estructura de carpetas:

- `PROYECTO-BOMBILLO/`
  - `index.html` — Interfaz de usuario.
  - `styles.css` — Estilos (claymorfismo, responsive).
  - `script.js` — Lógica de interactividad (comentada y con JSDoc).
  - `docs/` — Documentación del proyecto.

Componentes principales:

- UI (HTML): Contiene la representación visual de la bombilla y dos botones (`Encender`, `Apagar`).
- Estilos (CSS): Se usa claymorfismo mediante sombras internas y gradientes; incluye media queries para mobile/tablet/desktop.
- Lógica (JS): Estado simple (`isOn`) y funciones `turnOn` / `turnOff` + `updateUI`.

Flujo de funcionamiento:

1. El usuario pulsa `Encender` o `Apagar`.
2. Se invoca `turnOn()` o `turnOff()` que actualiza `state.isOn`.
3. `updateUI()` aplica o remueve la clase `.on` en el elemento `.bulb` y actualiza atributos `aria` y estados de botones.

Decisiones de diseño:

- Código modular y con funciones pequeñas para facilitar el aprendizaje.
- Accesibilidad básica: `aria-label` dinámico y `aria-live` para notificar cambios.
- No se usan librerías externas para mantener la simplicidad pedagógica.
