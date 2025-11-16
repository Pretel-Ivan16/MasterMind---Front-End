/* 
    JS Para la comprobación de datos del formulario de entrada



// Capturar el valor del input nick

const nickInput=document.getElementById('nick');
console.log(nickInput.nodeType);
nickInput.value="Iván";
console.log(nickInput.value);

// Capturar el valor del select


const tamanoInput=document.getElementById('tamano');
console.log(tamanoInput.value);
console.log(tamanoInput.options[tamanoInput.selectedIndex].text);


function test(){
    console.log("EVENTO SOBRE RATON");
} */

// Inicialización de var, objetos, DOM

/* const botonJugar = document.getElementById("jugar");

function comprobarForm(){
    console.log("Comprobamos el formulario");   
}

function ejecutarAccion(){
    console.log("Ejecutar accion");
    botonJugar.removeEventListener('click', ejecutarAccion);
}

botonJugar.addEventListener('click', comprobarForm);
botonJugar.addEventListener('click', ejecutarAccion); */

// Inicialización de var, objetos, DOM

const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");

// Funciones de evento

function comprobarForm(){

    // Comprobar cambios

    if(nickInput.value.length == 0);{
        console.log("No hay nick"); 
    }
}

// Inicio de carga de eventos

formEntrada.addEventListener('submit', comprobarForm);