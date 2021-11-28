let menu=document.querySelector('#menu')
let header=document.querySelector('.header')


menu.addEventListener('click', ()=>{
  menu.classList.toggle('fa-times')
  header.classList.toggle('toggle')
})
