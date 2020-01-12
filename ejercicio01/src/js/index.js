'use strict';

window.addEventListener('load', function() {
  console.log('Esta cargado el Dom');
  let formulario = document.querySelector('#formulario');
  let showdatos = document.querySelector('#datos');
  showdatos.style.display = 'none';

  formulario.addEventListener('submit', function() {
    console.log('Evento submit capturado');
    let nombre = document.querySelector('#nombre').value;
    let apellidos = document.querySelector('#apellidos').value;
    let edad = document.querySelector('#edad').value;
    console.log(nombre, apellidos, edad);
    showdatos.style.display = 'block';
    let p_nombre = document.querySelector('#p_nombre span');
    let p_apellidos = document.querySelector('#p_apellidos span');
    let p_edad = document.querySelector('#p_edad span');
    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellidos').value = '';
    document.querySelector('#edad').value = '';

    return false;
  });
});
