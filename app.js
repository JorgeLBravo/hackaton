
//Activar menu rsponsive

const menuBox = document.querySelector('.menu__contenedor__menuBox');
const menuBtn = document.querySelector('.menu__contenedor__btnBox');

menuBtn.addEventListener('click', function(){
    /* console.log('hiciste click'); */
    /* menuBox.classList.add('activarMenu'); */
    menuBox.classList.toggle('activarMenu');

})