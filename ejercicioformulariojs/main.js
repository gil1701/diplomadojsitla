
// obteniendo los valores de los campos del formulario
const color_fondo = document.getElementById("background_color");
const font_size = document.getElementById("font_height");
const altura_div = document.getElementById("height_div");
const ancho_div = document.getElementById("width_div");
const contenido = document.getElementById("content");
const boton = document.getElementById("procesar");
const font_color = document.getElementById("font_color");
let mostrar = document.getElementById("result");
function ejecutar() {
    mostrar.innerHTML = contenido.value;
    mostrar.style.fontSize = font_size.value + "px"
    mostrar.style.backgroundColor = color_fondo.value;
    mostrar.style.height = altura_div.value;
    mostrar.style.width = ancho_div.value;
    mostrar.style.color = font_color.value;
}





