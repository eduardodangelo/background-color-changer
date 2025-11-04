const btn = document.getElementById('changeColor');
const body = document.querySelector('body');

btn.addEventListener('click', () => { 
  body.classList.toggle('alt-color');
});

console.log('hola');
