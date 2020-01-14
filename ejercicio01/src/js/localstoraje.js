'use strict';
console.log('estas en localstorage');
let peliculas = document.querySelector('#formulario');
peliculas.addEventListener('submit', function() {
  console.log('agrega peli');
  let titulo = document.querySelector('#pelicula').value;

  if (titulo.length >= 0) {
    localStorage.setItem(titulo, titulo);
  }
});
let ul = document.querySelector('#peliculas-list');
for (let i in localStorage) {
  if (typeof localStorage[i] == 'string') {
    let li = document.createElement('li');
    li.append(localStorage[i]);
    ul.append(li);
  }
}
let peliculasb = document.querySelector('#formulariob');
peliculasb.addEventListener('submit', function() {
  console.log('borra peli');
  let titulo = document.querySelector('#borrarpelicula').value;

  if (titulo.length >= 0) {
    localStorage.removeItem(titulo);
  }
});
