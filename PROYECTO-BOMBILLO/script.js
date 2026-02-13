// script.js — Control de la bombilla
// Módulo ES para organización; uso de funciones pequeñas y documentación JSDoc

/**
 * Estado de la bombilla.
 * @typedef {Object} State
 * @property {boolean} isOn - Indica si la bombilla está encendida.
 */

/** @type {State} */
const state = { isOn: false };

/**
 * Actualiza la interfaz según el estado.
 * Actualiza clase visual, atributos ARIA, estado de botones y el texto para lectores de pantalla.
 * @returns {void}
 */
function updateUI(){
  const bulb = document.getElementById('bulb');
  const onBtn = document.getElementById('onBtn');
  const offBtn = document.getElementById('offBtn');
  const status = document.getElementById('status');

  if(state.isOn){
    bulb.classList.add('on');
    bulb.setAttribute('aria-label','Bombilla encendida');
    onBtn.disabled = true;
    offBtn.disabled = false;
    onBtn.setAttribute('aria-pressed','true');
    offBtn.setAttribute('aria-pressed','false');
    if(status) status.textContent = 'Bombilla encendida';
  } else {
    bulb.classList.remove('on');
    bulb.setAttribute('aria-label','Bombilla apagada');
    onBtn.disabled = false;
    offBtn.disabled = true;
    onBtn.setAttribute('aria-pressed','false');
    offBtn.setAttribute('aria-pressed','true');
    if(status) status.textContent = 'Bombilla apagada';
  }
}

/**
 * Enciende la bombilla.
 * @returns {void}
 */
export function turnOn(){
  state.isOn = true;
  updateUI();
}

/**
 * Apaga la bombilla.
 * @returns {void}
 */
export function turnOff(){
  state.isOn = false;
  updateUI();
}

/**
 * Inicializa los event listeners y estado por defecto.
 * - Click en botones
 * - Atajos de teclado: `E` para encender, `A` para apagar
 * @returns {void}
 */
function init(){
  const onBtn = document.getElementById('onBtn');
  const offBtn = document.getElementById('offBtn');

  // Manejo de clics
  onBtn.addEventListener('click', ()=>{ turnOn(); });
  offBtn.addEventListener('click', ()=>{ turnOff(); });

  // Accesibilidad: permitir Encender/Apagar con teclado (E/A)
  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'e') turnOn();
    if(e.key.toLowerCase() === 'a') turnOff();
  });

  // Estado inicial
  updateUI();
}

// Ejecutar cuando el DOM esté listo
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}