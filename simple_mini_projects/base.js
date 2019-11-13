/** @type {HTMLCanvasElement} */
const canvas = document.querySelector( '.canvas-main' )
const ctx = canvas.getContext( '2d' )

resizeCanvas()

function random( max, min=0 ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min
}
function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  if (typeof onResize != 'undefined') onResize()
}

window.addEventListener( `resize`, resizeCanvas )
window.addEventListener( `load`, resizeCanvas )